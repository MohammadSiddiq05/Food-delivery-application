import { useForm } from "react-hook-form";
import logo from "../../assets/Logo.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../../components/InputField";
import BtnSignUp from "../../components/BtnSignUp";
import { registerUser } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  restaurantName: z
    .string()
    .min(2, {
      message: "Your restaurant name must have more than 2 characters",
    })
    .max(20, {
      message: "Your restaurant name must have less than 20 characters",
    }),

  ownerName: z
    .string()
    .min(2, {
      message: "owner name must have more than 2 characters",
    })
    .max(20, {
      message: "owner name must have less than 20 characters",
    }),

  Email: z
    .string()
    .email({ message: "Enter a valid email" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email is not valid",
    }),

  phoneNumber: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, { message: "Enter number with country code" }),

  restaurantAddress: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long" })
    .max(100, { message: "Address must be less than 100 characters" })
    .regex(/^[a-zA-Z0-9\s,.\-/#]+$/, {
      message:
        "Address can only contain letters, numbers, spaces, commas, dots, and dashes",
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

const SellerSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(formSchema) });

  const navigate = useNavigate();
  const onSubmitAll = async (data) => {
    try {
      await registerUser({
        email: data.Email,
        password: data.password,
        role: "seller",
        extraData: {
          restaurantName: data.restaurantName,
          ownerName: data.ownerName,
          phone: data.phoneNumber,
          address: data.restaurantAddress,
        },
      });
      navigate("/SellerLogin");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center col-span-2 bg-gray-50 py-8">
        <div className="flex flex-col md:flex-row w-11/12 max-w-5xl gap-8 md:gap-12">
          <div className="flex flex-col justify-center items-center p-8 w-1/2">
            <img src={logo} alt="App Icon" className="mb-4" />
            <p className="text-lg text-[#0E2A45] text-center leading-relaxed">
              Manage Your Restaurant <br />
              Grow with FoodZilla 🍴
            </p>
          </div>

          <div className="flex flex-col justify-center bg-white rounded-xl shadow-lg p-8 w-full md:w-1/2">
            <div className="w-full max-w-md mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit(onSubmitAll)}>
                <div className="grid grid-cols-1 gap-4">
                  <InputField
                    register={register}
                    name="restaurantName"
                    type="text"
                    placeholder="Restaurant Name"
                    error={errors.restaurantName}
                  />

                  <InputField
                    register={register}
                    name="ownerName"
                    type="text"
                    placeholder="Owner Name"
                    error={errors.ownerName}
                  />
                  <InputField
                    register={register}
                    name="Email"
                    type="email"
                    placeholder="Email"
                    error={errors.Email}
                  />
                  <InputField
                    register={register}
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    error={errors.phoneNumber}
                  />

                  <InputField
                    register={register}
                    name="restaurantAddress"
                    type="text"
                    placeholder="Restaurant Address"
                    error={errors.restaurantAddress}
                  />
                  <InputField
                    register={register}
                    name="password"
                    type="password"
                    placeholder="Password"
                    error={errors.password}
                  />
                </div>
                <BtnSignUp
                  isSubmitting={isSubmitting}
                  linkTo={"/SellerLogin"}
                  linkText={
                    <p className="text-gray-600">
                      Already have an account ?{" "}
                      <span className="text-[#E64D21]">Sign In</span>
                    </p>
                  }
                  btnText={"Sign Up"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerSignUp;
