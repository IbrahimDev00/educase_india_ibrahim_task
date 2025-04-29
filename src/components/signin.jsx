import Link from "next/link";

const Signin = () => {
    return (
      <div>
        <Link href = "/signin"><button className="bg-[#6C25FF4B] text-[16px] text-[#1D2226] font-medium pt-3 pb-3 pl-5 pr-5 rounded-xl">Already registered? Login</button></Link>
      </div>
    );
  };
  
  export default Signin;
  