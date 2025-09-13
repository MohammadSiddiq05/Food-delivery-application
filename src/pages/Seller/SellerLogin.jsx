import { useForm } from "react-hook-form";
import logo from "../../assets/Logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../../components/InputField";
import { loginUser } from "../../firebase/auth";
import BtnSignUp from "../../components/BtnSignUp";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  Email: z
    .string()
    .email({ message: "Enter a valid email" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email is not valid",
    }),

  password: z
    .string()
    .min(8, { message: "Your password must be more than 8 characters" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      {
        message:
          "At least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character",
      }
    ),
});
const SellerLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(formSchema) });

  const navigate = useNavigate()
  const onSubmitAll = async (data) => {
    try {
      await loginUser(data.Email, data.password);
      navigate('/SellerPage')
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="flex flex-col md:flex-row w-11/12 max-w-5xl gap-8 md:gap-12">
        <div className="flex flex-col justify-center items-center p-8 w-1/2">
          <img src={logo} alt="App Icon" className="mb-4" />
          <p className="text-lg text-[#0E2A45] text-center leading-relaxed">
            Fast & Fresh <br /> At Your Doorstep 🍴
          </p>
        </div>

        <div className="flex flex-col justify-center bg-white rounded-xl shadow-lg p-8 w-full md:w-1/2">
          <div className="w-full max-w-md mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmitAll)}>
              <InputField
                register={register}
                name="Email"
                type="email"
                placeholder="Email"
                error={errors.Email}
              />
              <InputField
                register={register}
                name="password"
                type="password"
                placeholder="Password"
                error={errors.password}
              />

              <BtnSignUp
                isSubmitting={isSubmitting}
                linkText={
                  <p className="text-gray-600">
                    Create an account ?{" "}
                    <span className="text-[#E64D21]">Sign Up</span>
                  </p>
                }
                btnText={"Login"}
                linkTo={"/SellerSignUp"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerLogin;
