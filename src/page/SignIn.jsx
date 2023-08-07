import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignIn() {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Enter correct password"),
  });

  const [passwordVisibility, setPasswordVisibility] = React.useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const password = watch("password", "");

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center gap-[235px] px-[160px]">
      <div>
        <h1 className="text-[#525252] text-[2.842rem] font-bold mb-[22px]">
          We are happy to <br />
          see you again{" "}
        </h1>
        <p className="text-black text-[1rem] w-[390.882px]">
          Login to your dashboard and take full control of your restaurant.
          Always contact us if you need support. .{" "}
        </p>
      </div>
      <div className="bg-white w-[383px] h-[510px] rounded-[40px] shadow-xl p-[35px]">
        <img
          src="../../assets/logo.png"
          alt=""
          className="w-[92px] h-[48px] mb-[33px]"
        />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div
            className={`w-[317.703px] h-[60px] p-[8px] rounded-[14px] bg-[rgba(217,217,217,0.20)] ${
              errors.email && "border border-red-500"
            }`}
          >
            <p className="text-[#828282] text-[0.875rem]">Your email</p>
            <input
              type="text"
              name=""
              id=""
              className={`outline-none bg-transparent text-[#4A5568] text-[1rem] font-medium `}
              {...register("email")}
              placeholder="demo@gml.com"
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
                name=""
                id=""
                value={
                  passwordVisibility ? password : "*".repeat(password.length)
                }
                className={`outline-none bg-transparent text-[#4A5568] text-[1rem] font-medium`}
                {...register("password")}
                placeholder="vtsh-9nVu-qnDh-Swhk"
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
              {errors.password.message}
            </pre>
          )}
          <div className="my-[32px]">
            <p className="text-[#2C2C2C] text-[.875rem] text-right">
              Forgot password ?{" "}
              <span className="text-[#DC810B] font-bold">Reset here.</span>
            </p>
          </div>
          <button className="btn--color  w-full h-[60px] rounded-[300px]">
            Sign In <img src="../assets/Frame.svg" alt="" />
            <img src="../images/dot.svg" alt="" />
          </button>
        </form>
      </div>
    </div>
  );
}
