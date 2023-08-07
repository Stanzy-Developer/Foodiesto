import React from "react";

export default function EmailConfirmation() {
  return (
    <section className="w-full h-full flex justify-center items-center mt-[30px]">
      <div className="flex flex-col items-center w-[383px] h-[452px] rounded-[40px] shadow-2xl px-[35px] pt-[70px]">
        <img src="../public/images/validation.svg" alt="..." />
        <h2 className="text-[#6DAD05] text-[1.5625rem] font-bold my-[25px]">
          Congratulations !!!
        </h2>
        <p className="text-black text-[.9375rem] text-center mb-[41px] w-[259px]">
          Your account was created successfully. we sent a confirmation email to{" "}
          <span className="text-[#DC810B] font-bold">demo@gmail.com.</span>{" "}
          Click on the link to verify your account.
        </p>
        <button className="btn--color  w-full h-[60px] rounded-[300px]">
          Sign In <img src="../assets/Frame.svg" alt="" />
          <img src="../images/dot.svg" alt="" />
        </button>
      </div>
    </section>
  );
}
