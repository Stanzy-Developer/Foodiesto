import React from "react";

export default function Home() {
  return (
    <div className="">
      {/* Header section */}
      <header className="Homebg">
        <nav className="px-[161px] py-[44px] flex items-center">
          <img
            src="../assets/logo.png"
            alt=""
            width={"105px"}
            height="55px"
            className="mr-[240px]"
          />
          <ul className="flex gap-[30px] mr-[86px]">
            <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
              <a href="#about">About</a>
            </li>
            <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
              <a href="#feature">Features</a>
            </li>
            <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
              <a href="#faq">FAQ</a>
            </li>
            <li className="text-[#2C2C2C] relative  py-[4px] hover:font-bold before:contents-[''] before:absolute before:bottom-0 before:left-0 before:rounded-md before:w-0 before:h-[2px] before:bg-[#DC810B] hover:before:w-full hover:before:transition-all hover:before:duration-1000 hover:before:ease-in-out">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="mr-[32px] flex gap-[10px] items-center">
            <img
              src="../assets/Profile.svg"
              alt=""
              className="cursor-pointer"
            />
            <p className=" border-[#DC810B] border-b-[2px]  p-[2px] cursor-pointer text-[#655D5D]">
              Sign In
            </p>
          </div>
          <button className="btn">
            <p className="z-20"> Get Started</p>
          </button>
        </nav>

        {/* Hero-section */}

        <section className="pt-[90] pb-[140px] pl-[161px] flex justify-between items-center">
          <div>
            <h1 className="text-[54px] text-[#2C2C2C] font-bold">
              Your restaurant menu under a QR code.{" "}
            </h1>
            <p className="text-[24px] text-[#363636]">
              Stop sending huge PDFs menu to your customers. They are hard to
              navigate
            </p>
            <span>
              <img src="../assets/Scan.svg" alt="" />
            </span>
            <div className="flex items-center gap-[32px] mt-[79px]">
              <button class="btn--color">
                Get started <img src="../assets/Frame.svg" alt="gtrdf" />
              </button>
              <button class="btn">
                <p className="z-20">Features</p>{" "}
                <img src="../assets/Paper.svg" alt="hggvf" className="z-20" />
              </button>
            </div>
          </div>
          <img src="../assets/1.png" alt="" />
        </section>
      </header>

      {/* About section */}
      <section
        class="flex justify-between items-center gap-[35px] relative pl-[159px] pt-[140px] pb-[131px]"
        id="about"
      >
        <div className="relative">
          <h2 class="text-[#2C2C2C] text-[38px] font-bold  ">
            What is foodiesto ?
          </h2>
          <p class="">A Digital menu with QR Code.</p>
          <p
            class="text-[#DC810B] mt-[40px] mb-[12px] text-[14px] font-bold p-[10px] rounded-[30px] description_bg w-fit"
            id="description-bg"
          >
            Description
          </p>
          <p class="text-[#363636] text-[20px] ">
            The recent pandemic situation had a big effect on people lifestyle
            in various ways and in different areas. Made for restaurants owners,
            <span class="font-bold">Foodiesto</span> tends to provide a scan and
            go digital menu via a QR Code for your restaurant at a price beating
            all competition.
          </p>
          <div class="flex items-center gap-[32px] mb-[92px] mt-[33px]">
            <div class="flex justify-center items-center gap-[13.12px]">
              <div className="p-[13px] bg-[#FDEFED] rounded-full">
                <img src="../../assets/clean-design.svg" alt="" />
              </div>
              <p>Clean design</p>
            </div>

            <div class="flex justify-center items-center gap-[13.12px]">
              <div className="p-[13px] bg-[#FDEFED] rounded-full">
                <img src="../../assets/username.svg" alt="" />
              </div>
              <p>User friendly</p>
            </div>
            <div class="flex justify-center items-center gap-[13.12px]">
              <div className="p-[13px] bg-[#FDEFED] rounded-full">
                <img src="../../assets/best-price.svg" alt="" />
              </div>
              <p>Best price</p>
            </div>
          </div>
          <button class="btn--color">
            Get started <img src="../../assets/Frame.svg" alt="" />
          </button>
          <img src="../../assets/Grid.svg" alt="" class="absolute--img--left" />
        </div>
        <div>
          <img src="../../assets/2.png" alt="" />
        </div>
      </section>

      {/* Features Section */}
      <section
        class="bg-[#FCFCFC] pl-[159px] pt-[140px] pb-[131px] relative"
        id="feature"
      >
        <div className="relative">
          <h2 class="text-[#2C2C2C] text-[38px] font-[700] ">
            Foodiesto Features
          </h2>
          <p class="text-[#363636] text-[16px] leading-[33px] mb-[70px] ">
            Our main features include.
          </p>
          <img src="../../assets/Grid.svg" alt="" class="absolute--img--left" />
        </div>
        <div class="flex gap-[34px] items-center">
          <div class=" bg-white shadow-xl rounded-[45px] pt-[47px] pb-[79px] pl-[51px] pr-[60px] w-[351px]">
            <img class="mb-[31px]" src="../../assets/machine.svg" alt="" />
            <h2 class=" text-[24px] text-[#2C2C2C] font-bold mb-[16px]  w-[245px]">
              Provides a backend to manage your menu
            </h2>
            <div class="w-[35px] h-[4px] bg-[#DC810B] mb-[33px] rounded-full "></div>
            <p class=" text-[#2C2C2C] text-[14px]">
              Why do you keep using PDFs for the display of your menu ? Editing
              it can be challenging and due to its loaded...
            </p>
          </div>
          <div class=" bg-white shadow-2xl rounded-[45px] pt-[66px] pb-[66px] pl-[51px] pr-[83px] relative w-[351px]">
            <img class="mb-[31px]" src="../../assets/sapp.svg" alt="" />
            <h2 class=" text-[24px] text-[#2C2C2C] font-bold mb-[16px]  ">
              WhatsApp orders collect
            </h2>
            <div class="w-[35px] h-[4px] bg-[#DC810B] mb-[29px] rounded-full "></div>
            <p class=" text-[#2C2C2C] text-[14px] w-[220px]">
              With our new feature, collect your customers orders via WhatsApp
              in a very easy way.
            </p>

            <div class="flex justify-center items-center gap-[13px] mt-[37px]">
              <p class=" text-[#E23B31] text-[18px]  ">See how it works</p>
              <img class="cursor-pointer" src="../../assets/play.svg" alt="" />
            </div>

            <img
              class="absolute right-0 top-[47px]"
              src="../../assets/Vector.png"
              alt=""
            />
          </div>
          <div class=" bg-white shadow-xl rounded-[45px] pt-[47px] pb-[97px] pl-[51px] pr-[60px]  w-[351px] ">
            <img class="mb-[31px]" src="../../assets/cofee.svg" alt="" />
            <h2 class=" text-[24px] text-[#2C2C2C] font-bold mb-[31px]  ">
              Create unlimited
              <br />
              meals
            </h2>
            <div class="w-[35px] h-[4px] bg-[#DC810B] mb-[33px] rounded-full "></div>
            <p class=" text-[#2C2C2C] text-[14px]  ">
              The sky is your limit. Create as much meals as you wish.
            </p>
          </div>
        </div>
      </section>

      <section class=" pl-[159px] pt-[140px] relative flex mb-[-50px]">
        <div class="w-[550px] relative">
          <h2 class="text-[#2C2C2C] text-[38px] font-bold mb-[43px]">
            Stop using PDF based menu for your customers
          </h2>
          <p class="text-[#363636] text-[20px] mb-[100px]">
            It is very important to note that not all customers have big mobile
            devices. Some of their terminal might have very small screen size.
            So sending them a PDF menu might make the reading experience very
            hard as they have to zoom in and out in for optimal view. Give less
            pain to your customers,{" "}
            <span className="font-bold">no PDF, just a link </span> and a{" "}
            <span className="font-bold">QR code</span> with{" "}
            <span className="font-bold">Foodiesto.</span>
          </p>
          <div class="flex justify-left items-center gap-[42px]">
            <button class="btn--color">
              Start now
              <img src="../../assets/Frame.svg" alt="" />
            </button>
            <div class="flex justify-center items-center">
              <div class="icon rounded-full">
                <img src="../../assets/Scan-color.png" alt="" />
              </div>
              <img src="../../assets/plus.svg" alt="" />
              <div class="icon rounded-full">
                <img src="../../assets/link.svg" alt="" />
              </div>
            </div>
          </div>
          <img src="../../assets/Grid.svg" alt="" class="absolute--img--left" />
        </div>
        <div class="flex-1">
          <img src="../../assets/3.png" alt="" />
        </div>
      </section>

      <section class="flex relative justify-center items-center pr-[100px] pt-[140px] pb-[131px]">
        <img class="w-[50%] h-[570px]" src="../../assets/4.png" alt="" />
        <div class="relative">
          <h2 class="text-[#2C2C2C] text-[38px] font-bold">
            Start collecting orders <br />
            via WhatsApp
          </h2>
          <p class="w-[527px] text-[#363636] text-[20px] mt-[43px]">
            <span class="font-bold">Foodiesto</span> doesn’t only give your
            access to your menu, but go beyond that. Your customers can both
            view your online menu and send orders directly through WhatsApp if
            they need delivery. The process is simple, hassle free and
            user-friendly. Give your customers the experience they deserve with
            a very low cost service.
          </p>
          <button class="mt-[67px] btn--color ">
            Start now <img src="../../assets/Frame.svg" alt="" />
          </button>
          <img
            src="../../assets/Grid.svg"
            alt=""
            class="absolute--img--right"
          />
        </div>
      </section>

      <section class="flex relative justify-center items-center pl-[159px] pt-[140px] pb-[131px]">
        <div class="relative">
          <h2 class="text-[#2C2C2C] text-[38px] font-bold mb-[43px]">
            Why is Foodiesto good for your restaurant ?
          </h2>
          <p class=" text-[#363636] text-[20px] mb-[94px] ">
            Are you managing a big, small or medium restaurant, Foodiesto is
            capable of handling your menu. Picture menu are more converting that
            just a simple text. Go green ! no printing of colourful and costly
            menu books. Just a simple scan of your restaurant’s QR code at and
            you are good to go.
          </p>
          <button class="btn--color">
            Start now <img src="../../assets/Frame.svg" alt="" />
          </button>
          <img src="../../assets/Grid.svg" alt="" class="absolute--img--left" />
        </div>
        <img class="w-[832px] h-[623px]" src="../../assets/5.png" alt="" />
      </section>
      <section class="flex justify-center items-center Homebg">
        <img src="../../assets/6.png" alt="" class="w-[893px] h-[830px]" />
        <div class="relative w-[550px]">
          <h2 class="text-[38px] text-[] font-bold #2C2C2C">
            Create & manage <br /> your menu items
          </h2>
          <p class="text-[#363636] text-[20px] mb-[65px] mt-[43px]  ">
            Imagine you have some new dishes you would like to add to your menu
            list, or for some reasons you wish to change the price or
            description of your menu. That will be a difficult task to
            accomplish if you only have printed menus, considering the fact that
            reprinting will cost you a lot of money. No more worries, we got you
            covered. Manage your restaurant’s menu from our user-friendly
            backend.
          </p>
          <button class="mt-[67px] btn--color">
            Start now <img src="../../assets/Frame.svg" alt="" />
          </button>
          <img
            src="../../assets/Grid.svg"
            alt=""
            class="absolute--img--right"
          />
        </div>
      </section>
    </div>
  );
}
