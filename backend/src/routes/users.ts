import express, { Request, Response } from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

const router = express.Router();

router.post("/register",[
    check("Firstname" , "Firstname is required").isString(),
    check("Lastname" , "Lastname is required").isString(),
    check("Email" , "Email is required").isEmail(),
    check("Password" , "Password with 6 or more chars required").isLength({min : 6}),

] ,async (req: Request, res: Response) => {
    const error = validationResult(req)
    if(!error.isEmpty){
        return res.status(400).json({message : error.array()})
    }
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    user = new User(req.body);
    await user.save();

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET_KEY as string,
      { expiresIn: "1d" }
    );

    res.cookie('auth_token' , token , {
        httpOnly : true,
        secure : process.env.NODE_ENV === "production",
        maxAge : 86400000,
    })

    return res.status(200).send({message : "user registered OK"})

  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
});

export default router