const Footer = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container flex mx-auto justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tighter">
          Holidays.com
        </span>
        <span className="text-white font-bold tracking-tighter flex gap-4">
          <p className="cursor-pointer"> privacy policy</p>
          <p className="cursor-pointer">terms of service</p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
