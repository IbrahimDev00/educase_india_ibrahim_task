import SigninForm from "@/components/signinform";

export default function SigninPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-left">
        <h1 className="text-[28px] font-medium text-black mb-4">
          Signin to your <br /> PopX account
        </h1>
        <h3 className="text-[#777a7e] text-[16px] pb-4">Lorem ipsum dolor sit amet,<br/>Consectetur adipiscing elit.</h3>
        <SigninForm />
      </div>
    </div>
  );
}
