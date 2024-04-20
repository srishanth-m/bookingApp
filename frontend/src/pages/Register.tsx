import { useForm } from "react-hook-form";

type RegisterFormData = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {

  const { register, watch , handleSubmit} = useForm<RegisterFormData>();
  const onSubmit = handleSubmit((data) =>{console.log(data)})

  return (
    <form action="" className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold"> Create an account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          FirstName
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("firstname", { required: "This field is required" })}
          ></input>
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          LastName
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastname", { required: "This field is required" })}
          />
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "password must be atleast 6 letters long",
            },
          })}
        />
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirm Password
        <input
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "your passwords do not match";
              }
            },
          })}
        />
      </label>
      <span>
        <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl"> create Account</button>
      </span>
    </form>
  );
};

export default Register;
