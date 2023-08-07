import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import bg from "../../public/images/bbb.svg";

export default function SignOut() {
  const [passwordVisibility, setPasswordVisibility] = React.useState(true);
  const [passwordValue, setPasswordValue] = React.useState();

  //create yup schema
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Enter a password"),
    mobile: yup.number().positive().required("Enter your phone number"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /* const password = watch("password", ""); */

  // toggle password visibility
  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  // console.log the info input by the user
  const onSubmit = (data) => {
    console.log(data);
  };

  const calculatePasswordStrength = (passwordValue) => {
    // Password strength calculation logic
    if (
      /[0-9]+/.test(passwordValue) &&
      /[a-zA-Z]+/.test(passwordValue) &&
      passwordValue.length >= 10
    ) {
      if (/[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?]+/.test(passwordValue)) {
        return "very strong";
      } else if (/\d+/.test(passwordValue) && passwordValue.length >= 9) {
        return "strong";
      }
    } else if (/\d+/.test(passwordValue) && passwordValue.length >= 5) {
      return "weak";
    } else {
      return "very weak";
    }
  };

  const passwordStrength = calculatePasswordStrength(passwordValue);
  // check password strength
  const checkPasswordStrength = () => {
    if (passwordStrength === "very weak") {
      return "../../images/veryWeak.svg";
    } else if (passwordStrength === "weak") {
      return "../../images/weak.svg";
    } else if (passwordStrength === "strong") {
      return "../../images/strong.svg";
    } else if (passwordStrength === "very strong") {
      return "../../images/veryStrong.svg";
    } else {
      return null;
    }
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className="flex items-center gap-[160px] px-[160px]  py-[30px] relative">
      <img src={bg} alt="" className="absolute left-0 top-0 -z-10 " />
      <div>
        <h1 className="text-[#525252] text-[2.842rem] font-bold mb-[22px]">
          You made the right <br /> decision !{" "}
        </h1>
        <p className="text-black text-[1rem] w-[390.882px]">
          We are glad to see you onboard with us. Experience another way of
          managing your food items.{" "}
        </p>
      </div>
      <div className="bg-white w-[383px] h-[510px] rounded-[40px] shadow-xl p-[35px]">
        <img
          src="../../assets/logo.png"
          alt=""
          className="w-[92px] h-[48px] mb-[15px]"
        />
        <form
          action=""
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className={`w-[317.703px] h-[60px] p-[8px] rounded-[14px] bg-[rgba(217,217,217,0.20)] ${
              errors.email && "border border-red-500"
            }`}
          >
            <p className="text-[#828282] text-[0.875rem]">Your email</p>
            <input
              type="text"
              placeholder="demo@gml.com"
              className={`outline-none bg-transparent text-[#4A5568] text-[1rem] font-medium`}
              {...register("email")}
            />
          </div>
          {errors.email && (
            <pre className="text-[8px] font-light italic text-red-500 mx-[20px]">
              {errors.email.message}
            </pre>
          )}
          <div
            className={`w-[317.703px] h-[60px] p-[8px] rounded-[14px] bg-[rgba(217,217,217,0.20)]  relative ${
              errors.email && "border border-red-500"
            }`}
          >
            <div>
              <p className="text-[#828282] text-[0.875rem]">Password</p>
              <input
                type="text"
                placeholder="vtsh-9nVu-qnDh-Swhk"
                value={
                  passwordVisibility
                    ? passwordValue
                    : "*".repeat(passwordValue.length)
                }
                className={`outline-none bg-transparent text-[#4A5568] text-[1rem] font-medium`}
                {...register("password")}
                onChange={handlePasswordChange}
              />
            </div>
            <img
              src={
                passwordVisibility
                  ? "../../assets/hide.svg"
                  : "../../assets/show.svg"
              }
              alt=""
              className="absolute right-[20px] top-[20px] cursor-pointer w-[24px] h-[21px]"
              onClick={handlePasswordVisibility}
            />
          </div>
          {errors.password && (
            <pre className="text-[8px] font-light italic text-red-500 mx-[20px]">
              ${errors.password.message}
            </pre>
          )}
          <div
            className={`w-[317.703px] h-[60px] p-[8px] rounded-[14px] bg-[rgba(217,217,217,0.20)] ${
              errors.mobile && "border border-red-500"
            }`}
          >
            <p className="text-[#828282] text-[0.875rem]">Mobile number</p>
            <div className="flex items-center">
              <select
                name=""
                id=""
                className="bg-transparent text-[0.875rem] outline-none text-[#4A5568] mr-[10px]"
              ></select>
              <input
                type="number"
                className={` outline-none  bg-transparent text-[#4A5568] text-[1rem] font-medium ml-[10px]`}
                {...register("mobile")}
              />
            </div>
          </div>

          {errors.mobile && (
            <pre className="text-[8px] font-light italic text-red-500">
              Enter your phone number
            </pre>
          )}
          <div className="mt-[23px] flex justify-between items-center">
            <p className="text-[#828282] text-[.875rem]">Password Strength</p>
            <div className="flex items-center gap-[13px]">
              <p
                className={`text-[.875rem] font-bold ${
                  passwordStrength === "very strong" ||
                  passwordStrength === "strong"
                    ? "text-[#61AD32]"
                    : "text-[#F31A1A]"
                }`}
              >
                {passwordStrength}
              </p>
              <img src={checkPasswordStrength()} alt="" />
            </div>
          </div>

          <button className="btn--color  w-full h-[60px] rounded-[300px] mt-[36px]">
            Create Account <img src="../assets/Frame.svg" alt="" />
            <img src="../images/dot.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
