import CreateAccount from "@/components/create_account";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] px-4">
      <div className="w-full max-w-md text-left">
        <h1 className="text-[28px] font-medium text-black mb-6">
          Create your <br /> PopX account
        </h1>
        <CreateAccount />
      </div>
    </div>
  );
}
