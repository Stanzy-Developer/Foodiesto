import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Home() {
  const date = new Date();

  return (
    <div className="">
      {/* Header section */}
      <header className="Homebg">
        <nav className="px-[161px] py-[44px] flex items-center">
          <Link to=".">
            <img
              src="../assets/logo.png"
              alt=""
              width={"105px"}
              height="55px"
              loading="lazy"
              className="mr-[240px]"
            />
          </Link>
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
          <Link to={"Registration/sign-in"} relative="path">
            <div className="mr-[32px] flex gap-[10px] items-center">
              <img
                src="../assets/Profile.svg"
                alt=""
                loading="lazy"
                className="cursor-pointer"
              />
              <p className=" border-[#DC810B] border-b-[2px]  p-[2px] cursor-pointer text-[#655D5D]">
                Sign In
              </p>
            </div>
          </Link>
          <Link to={"Registration"}>
            <button className="btn">
              {" "}
              <p className="z-20"> Get Started</p>
            </button>
          </Link>
        </nav>

        {/* Hero-section */}

        <section
          className="pt-[90] pb-[140px] pl-[161px] flex justify-between items-center"
          id="home"
        >
          <div>
            <h1 className="text-[54px] text-[#2C2C2C] font-bold">
              Your restaurant menu under a QR code.{" "}
            </h1>
            <div className="flex items-center">
              <p className="text-[24px] text-[#363636] w-[419px]">
                Stop sending huge PDFs menu to your customers. They are hard to
                navigate
              </p>
              <img src="../assets/Scan.svg" loading="lazy" alt="" />
            </div>
            <div className="flex items-center gap-[32px] mt-[79px]">
              <Link to={"Registration"}>
                <button className="btn--color">
                  Get started <img src="../assets/Frame.svg" alt="" />
                </button>
              </Link>
              <button className="btn">
                <p className="z-20">Features</p>{" "}
                <img src="../assets/Paper.svg" alt="" className="z-20" />
              </button>
            </div>
          </div>
          <LazyLoadImage
            src={"../assets/1.png"}
            effect="blur"
            alt=""
            className="w-[740px] h-[500px]"
          />
        </section>
      </header>

      {/* About section */}
      <section
        className="flex justify-between items-center gap-[35px] relative pl-[159px] pt-[140px] pb-[131px]"
        id="about"
      >
        <div className="relative">
          <h2 className="text-[#2C2C2C] text-[38px] font-bold  ">
            What is foodiesto ?
          </h2>
          <p className="">A Digital menu with QR Code.</p>
          <p
            className="text-[#DC810B] mt-[40px] mb-[12px] text-[14px] font-bold p-[10px] rounded-[30px] description_bg w-fit"
            id="description-bg"
          >
            Description
          </p>
          <p className="text-[#363636] text-[20px] w-[527px]">
            The recent pandemic situation had a big effect on people lifestyle
            in various ways and in different areas. Made for restaurants owners,
            <span className="font-bold">Foodiesto</span> tends to provide a scan
            and go digital menu via a QR Code for your restaurant at a price
            beating all competition.
          </p>
          <div className="flex items-center gap-[32px] mb-[92px] mt-[33px]">
            <div className="flex justify-center items-center gap-[13.12px]">
              <div className="p-[13px] bg-[#FDEFED] rounded-full">
                <img src="../../assets/clean-design.svg" alt="" />
              </div>
              <p>Clean design</p>
            </div>

            <div className="flex justify-center items-center gap-[13.12px]">
              <div className="p-[13px] bg-[#FDEFED] rounded-full">
                <img src="../../assets/username.svg" alt="" />
              </div>
              <p>User friendly</p>
            </div>
            <div className="flex justify-center items-center gap-[13.12px]">
              <div className="p-[13px] bg-[#FDEFED] rounded-full">
                <img src="../../assets/best-price.svg" alt="" />
              </div>
              <p>Best price</p>
            </div>
          </div>
          <Link to={"Registration"}>
            <button className="btn--color">
              Get started <img src="../assets/Frame.svg" alt="" />
            </button>
          </Link>
          <img
            src="../../assets/Grid.svg"
            alt=""
            className="absolute--img--left"
          />
        </div>
        <div>
          <LazyLoadImage src="../../assets/2.png" effect="blur" alt="" />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FCFCFC] pl-[159px] pt-[140px] pb-[141px] relative">
        <div className="relative" id="feature">
          <h2 className="text-[#2C2C2C] text-[38px] font-[700] ">
            Foodiesto Features
          </h2>
          <p className="text-[#363636] text-[16px] leading-[33px] mb-[70px] ">
            Our main features include.
          </p>
          <img
            src="../../assets/Grid.svg"
            alt=""
            className="absolute--img--left"
          />
        </div>
        <div className="flex gap-[34px] items-center">
          <div className=" bg-white shadow-xl rounded-[45px] pt-[47px] pb-[79px] pl-[51px] pr-[60px] w-[351px]">
            <img className="mb-[31px]" src="../../assets/machine.svg" alt="" />
            <h2 className=" text-[24px] text-[#2C2C2C] font-bold mb-[16px]  w-[245px]">
              Provides a backend to manage your menu
            </h2>
            <div className="w-[35px] h-[4px] bg-[#DC810B] mb-[33px] rounded-full "></div>
            <p className=" text-[#2C2C2C] text-[14px]">
              Why do you keep using PDFs for the display of your menu ? Editing
              it can be challenging and due to its loaded...
            </p>
          </div>
          <div className=" bg-white shadow-2xl rounded-[45px] pt-[66px] pb-[66px] pl-[51px] pr-[83px] relative w-[351px]">
            <img className="mb-[31px]" src="../../assets/sapp.svg" alt="" />
            <h2 className=" text-[24px] text-[#2C2C2C] font-bold mb-[16px]  ">
              WhatsApp orders collect
            </h2>
            <div className="w-[35px] h-[4px] bg-[#DC810B] mb-[29px] rounded-full "></div>
            <p className=" text-[#2C2C2C] text-[14px] w-[220px]">
              With our new feature, collect your customers orders via WhatsApp
              in a very easy way.
            </p>

            <div className="flex justify-center items-center gap-[13px] mt-[37px]">
              <p className=" text-[#E23B31] text-[18px]  ">See how it works</p>
              <img
                className="cursor-pointer"
                src="../../assets/play.svg"
                alt=""
              />
            </div>

            <img
              className="absolute right-0 top-[47px]"
              src="../../assets/Vector.png"
              alt=""
            />
          </div>
          <div className=" bg-white shadow-xl rounded-[45px] pt-[47px] pb-[97px] pl-[51px] pr-[60px]  w-[351px] ">
            <img className="mb-[31px]" src="../../assets/cofee.svg" alt="" />
            <h2 className=" text-[24px] text-[#2C2C2C] font-bold mb-[31px]  ">
              Create unlimited
              <br />
              meals
            </h2>
            <div className="w-[35px] h-[4px] bg-[#DC810B] mb-[33px] rounded-full "></div>
            <p className=" text-[#2C2C2C] text-[14px]  ">
              The sky is your limit. Create as much meals as you wish.
            </p>
          </div>
        </div>
      </section>

      <section className=" pl-[159px] pt-[140px] relative flex mb-[-50px]">
        <div className="w-[550px] relative">
          <h2 className="text-[#2C2C2C] text-[38px] font-bold mb-[43px]">
            Stop using PDF based menu for your customers
          </h2>
          <p className="text-[#363636] text-[20px] mb-[100px]">
            It is very important to note that not all customers have big mobile
            devices. Some of their terminal might have very small screen size.
            So sending them a PDF menu might make the reading experience very
            hard as they have to zoom in and out in for optimal view. Give less
            pain to your customers,{" "}
            <span className="font-bold">no PDF, just a link </span> and a{" "}
            <span className="font-bold">QR code</span> with{" "}
            <span className="font-bold">Foodiesto.</span>
          </p>
          <div className="flex justify-left items-center gap-[42px]">
            <Link to={"Registration"}>
              <button className="btn--color">
                Start Now
                <img src="../assets/Frame.svg" alt="" />
              </button>
            </Link>
            <div className="flex justify-center items-center">
              <div className="icon rounded-full">
                <img src="../../assets/Scan-color.png" alt="" />
              </div>
              <img src="../../assets/plus.svg" alt="" />
              <div className="icon rounded-full">
                <img src="../../assets/link.svg" alt="" />
              </div>
            </div>
          </div>
          <img
            src="../../assets/Grid.svg"
            alt=""
            className="absolute--img--left"
          />
        </div>
        <div className="flex-1">
          <LazyLoadImage src="../../assets/3.png" effect="blur" alt="" />
        </div>
      </section>

      <section className="flex relative justify-center items-center pr-[150px] pt-[140px] pb-[131px]">
        <LazyLoadImage
          /*  className="w-[50%] h-[570px]" */
          src="../../assets/4.png"
          effect="blur"
          alt=""
        />
        <div className="relative">
          <h2 className="text-[#2C2C2C] text-[38px] font-bold">
            Start collecting orders <br />
            via WhatsApp
          </h2>
          <p className="w-[527px] text-[#363636] text-[20px] mt-[43px]">
            <span className="font-bold">Foodiesto</span> doesn’t only give your
            access to your menu, but go beyond that. Your customers can both
            view your online menu and send orders directly through WhatsApp if
            they need delivery. The process is simple, hassle free and
            user-friendly. Give your customers the experience they deserve with
            a very low cost service.
          </p>
          <Link to={"Registration"}>
            <button className="btn--color mt-[67px]">
              Start Now
              <img src="../assets/Frame.svg" alt="" />
            </button>
          </Link>
          <img
            src="../../assets/Grid.svg"
            alt=""
            className="absolute--img--right"
          />
        </div>
      </section>

      <section className="flex relative justify-center items-center pl-[159px] pt-[140px] pb-[131px]">
        <div className="relative">
          <h2 className="text-[#2C2C2C] text-[38px] font-bold mb-[43px]">
            Why is Foodiesto good for your restaurant ?
          </h2>
          <p className=" text-[#363636] text-[20px] mb-[94px] w-[517px]">
            Are you managing a big, small or medium restaurant, Foodiesto is
            capable of handling your menu. Picture menu are more converting that
            just a simple text. Go green ! no printing of colorful and costly
            menu books. Just a simple scan of your restaurant’s QR code at and
            you are good to go.
          </p>
          <Link to={"Registration"}>
            <button className="btn--color">
              Start Now
              <img src="../assets/Frame.svg" alt="" />
            </button>
          </Link>
          <img
            src="../../assets/Grid.svg"
            alt=""
            className="absolute--img--left"
          />
        </div>
        <LazyLoadImage
          className="w-[832px] h-[623px]"
          src="../../assets/5.png"
          effect="blur"
          alt=""
        />
      </section>
      <section className="flex justify-center items-center Homebg  pr-[159px] pt-[52px] pb-[-20px]">
        <LazyLoadImage
          src="../../assets/6.png"
          alt=""
          effect="blur"
          className="w-[893px] h-[840px]"
        />
        <div className="relative w-[550px]">
          <h2 className="text-[38px] text-[] font-bold #2C2C2C">
            Create & manage <br /> your menu items
          </h2>
          <p className="text-[#363636] text-[20px] mb-[64px] mt-[43px]  w-[544px]">
            Imagine you have some new dishes you would like to add to your menu
            list, or for some reasons you wish to change the price or
            description of your menu. That will be a difficult task to
            accomplish if you only have printed menus, considering the fact that
            reprinting will cost you a lot of money. No more worries, we got you
            covered. Manage your restaurant’s menu from our user-friendly
            backend.
          </p>
          <Link to={"Registration"}>
            <button className="btn--color mt-[67px]">
              Start Now
              <img src="../assets/Frame.svg" alt="" />
            </button>
          </Link>
          <img
            src="../../assets/Grid.svg"
            alt=""
            className="absolute--img--right"
          />
        </div>
      </section>
      {/*  */}

      {/* Pricing Section */}
      <section className=" pt-[140px] pb-[141px] relative text-center">
        <h2 className="text-[#2C2C2C] text-[38px] font-bold" id="pricing">
          Choose your plan and get started
        </h2>
        <p className="text-[#2C2C2C] text-[1.25rem] mb-[59px]">
          We give affordable and flexible options.
          <span className="text-[#D00000] text-[1.25rem] font-bold ml-[20px]">
            Offers expire in : 29 days
          </span>
        </p>
        <img
          src="../assets/Grid.svg"
          alt=""
          className="absolute top-[120px] right-0"
        />
        <div className="flex items-center justify-center gap-[32px]">
          {/* Monthly Plan Card */}
          <div className="w-[352px] h-[392px] rounded-[32px] bg-[#FFF] shadow-xl p-[49px] text-left mt-[90px]">
            <h3 className="text-[#363636] text-[1.25rem] font-bold">
              Monthly Plan
            </h3>
            <p className="text-[#363636] text-[2.1875rem] font-bold">
              $15{" "}
              <span className="relative text-[rgba(52,52,52,.30)] text-[1.125rem] font-bold">
                <img
                  src="../assets/Line.png
                "
                  alt=""
                  className="absolute top-[30%] left-0 z-10 opacity-[100%]"
                />
                $29.98
              </span>
            </p>
            <ul className="mt-[34px]">
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Full dashboard access
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Manage WhatsApp orders{" "}
                <span className="p-[6.5px] rounded-[30px] text-[0.625rem] bg-[#6DAD05] ml-[-5px]">
                  NEW
                </span>
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Unlimited meals creation
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                QR Code + URL
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Free support{" "}
              </li>
            </ul>
          </div>

          {/* Yearly Plan Card */}
          <div className="w-[352px] h-[480px] rounded-[32px] bg-[#FFF] shadow-2xl p-[49px] text-left mt-[59px]">
            <h3 className="text-[#363636] text-[1.25rem] font-bold">
              Yearly Plan
            </h3>
            <p className="text-[#363636] text-[2.1875rem] font-bold">
              $35{" "}
              <span className="relative text-[rgba(52,52,52,.30)] text-[1.125rem] font-bold">
                <img
                  src="../assets/Line.png
                "
                  alt=""
                  className="absolute top-[30%] left-0 z-10 opacity-[100%]"
                />
                $99.98
              </span>
            </p>
            <ul className="mt-[34px] mb-[37px]">
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Full dashboard access
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Manage WhatsApp orders{" "}
                <span className="p-[6.5px] rounded-[30px] text-[0.625rem] bg-[#6DAD05] ml-[-5px]">
                  NEW
                </span>
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Unlimited meals creation
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                QR Code + URL
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Free support{" "}
              </li>
            </ul>
            <button className="w-[268px] h-[61px] rounded-[12px] text-center text-white text-[1rem] font-bold btnColor">
              Choose plan
            </button>
          </div>
          {/* Lifetime Plan Card */}
          <div className="w-[352px] h-[392px] rounded-[32px] bg-[#FFF] shadow-xl p-[49px] text-left mt-[90px]">
            <h3 className="text-[#363636] text-[1.25rem] font-bold">
              Lifetime
            </h3>
            <p className="text-[#363636] text-[2.1875rem] font-bold">
              $200{" "}
              <span className="relative text-[rgba(52,52,52,.30)] text-[1.125rem] font-bold">
                <img
                  src="../assets/Line.png
                "
                  alt=""
                  className="absolute top-[30%] left-0 z-10 opacity-[100%]"
                />
                $349.98
              </span>
            </p>
            <ul className="mt-[34px]">
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Full dashboard access
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Manage WhatsApp orders{" "}
                <span className="p-[6.5px] rounded-[30px] text-[0.625rem] bg-[#8F2692] ml-[-5px] text-white">
                  NEW
                </span>
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Unlimited meals creation
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                QR Code + URL
              </li>
              <li className="text-[#363636] text-[0.875rem] flex items-center gap-[15px] mb-[14px]">
                <img
                  src="../assets/tick.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                Free support{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="px-[161px] pt-[70px] pb-[140px] relative flex items-center justify-between"
        id="contact"
      >
        <div className="max-w-[450px]">
          <img src="../assets/Grid.svg" alt="" className="mb-[23px]" />
          <h1 className="text-[#525252] text-[2.8125rem] font-bold mb-[36px]">
            Any question? Reach out to us.
          </h1>
          <p className="text-[#525252] text-[1.25rem] ">
            We are devoted to provide a quality service to all our customers at
            a very low price. That’s why we will do our best to respond within
            1-2 business working days.
          </p>
        </div>
        <form action="">
          <div className="flex items-center gap-[32px] mb-[25px]">
            <div className="flex items-center px-[24px] py-[22px] bg-[rgba(217,217,217,0.20)] rounded-[14px] gap-[18px] w-[209px]">
              <img
                src="../assets/ProfileNotColor.png"
                alt=""
                className="w-[24px] h-[25px]"
              />
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent text-[0.875rem] outline-none text-[#4A5568] w-[119px]"
              />
            </div>

            <div className="flex items-center px-[24px] py-[22px] bg-[rgba(217,217,217,0.20)] rounded-[14px] gap-[23px] w-[209px]">
              <img
                src="../assets/Message.png"
                alt=""
                className="w-[24px] h-[25px]"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-transparent text-[0.875rem] outline-none text-[#4A5568] w-[119px]"
              />
            </div>
          </div>

          <div className="flex items-center gap-[32px] mb-[25px]">
            <div className="flex items-center px-[24px] py-[22px] bg-[rgba(217,217,217,0.20)] rounded-[14px] gap-[18px] w-[209px]">
              <img
                src="../assets/Edit.png"
                alt=""
                className="w-[24px] h-[25px]"
              />
              <select
                id="country"
                name="country"
                className=" bg-transparent text-[0.875rem] outline-none text-[#4A5568] w-[119px]"
              >
                <option value="" className="text-[#4A5568]">
                  Subject
                </option>
                <option value="" className="text-[#4A5568]">
                  Business
                </option>
                <option value="" className="text-[#4A5568]">
                  Request Demo
                </option>
                <option value="" className="text-[#4A5568]">
                  Ask Questions
                </option>
              </select>
            </div>

            <div className="flex items-center px-[24px] py-[22px] bg-[rgba(217,217,217,0.20)] rounded-[14px] gap-[23px] w-[209px]">
              <img
                src="../assets/Call.png"
                alt=""
                className="w-[24px] h-[25px]"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="bg-transparent text-[0.875rem] outline-none text-[#4A5568] w-[119px]"
              />
            </div>
          </div>
          <div className="mt-[36px]">
            <textarea
              name=""
              id=""
              className="bg-[rgba(217,217,217,0.20)] w-[451px] h-[183px] p-[28px] resize-none"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="w-[210px] h-[66px] rounded-[14px] text-center text-white text-[1rem] font-bold btnColor flex items-center gap-[11px] justify-center mt-[59px]">
            <p className="font-bold">Sent Message</p>
            <img
              src="../assets/Send.png"
              alt=""
              className="w-[34px] h-[34px]"
            />
          </button>
        </form>
        <img
          src="../assets/Ellipse2.svg"
          alt=""
          className="absolute left-0 top-[80px]"
        />
      </section>

      {/* Footer */}
      <footer className=" bg-[#313131]">
        <div className="flex items-start px-[161px] pt-[74px]">
          <div className="mr-[45px]">
            <img src="../assets/LogoLight.svg" alt="" className="mb-[13px]" />
            <p className="text-white w-[306px]">
              Get a better digitalized menu for your restaurant. Better display,
              clean design, suitable for all types of restaurants.
            </p>
          </div>
          <div className="mr-[80px] text-white">
            <h1 className="text-[1.25rem] font-bold mb-[27px]">
              Important links
            </h1>
            <ul>
              <li className="mb-[10px]">
                <a href="#home">Home</a>
              </li>
              <li className="mb-[10px]">
                <a href="#about">About </a>
              </li>
              <li className="mb-[10px]">
                <a href="#feature">Features</a>
              </li>
              <li className="mb-[10px]">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="mb-[10px]">
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <div>
              <h1 className="text-[1.25rem] font-bold mb-[18px]">
                Subscribe to new letters
              </h1>
              <div className="flex items-center w-[266px] h-[54px] bg-[rgba(217,217,217,0.20)] rounded-[14px] mb-[37px] p-[17px]">
                <img
                  src="../assets/Message2.svg"
                  alt=""
                  className="w-[24px] h-[25px] mr-[17px]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-transparent text-[0.875rem] outline-none text-white w-[80px] mr-[30px]"
                />
                <button className="w-[81px] h-[32px] rounded-[7px] text-center text-white text-[0.5rem] font-bold btnColor flex items-center gap-[11px] justify-center">
                  <p className="font-bold">Submit</p>
                  <img
                    src="../assets/Send.png"
                    alt=""
                    className="w-[16px] h-[16px]"
                  />
                </button>
              </div>
            </div>
            <div className="mb-[40px]">
              <h1 className="text-[1.25rem] font-bold mb-[22px]">
                Contacts us
              </h1>
              <div className="flex items-center mb-[15px]">
                {" "}
                <img
                  src="../assets/Message2.svg"
                  alt=""
                  className="w-[20px] h-[20px] mr-[11px]"
                />{" "}
                <p className="">support@foodiesto.com</p>
              </div>
              <div className="flex items-center">
                {" "}
                <img
                  src="../assets/Call2.svg"
                  alt=""
                  className="w-[20px] h-[20px] mr-[11px]"
                />{" "}
                <p className="">+44 359 298 9984</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-[161px] py-[18px] border-t-[1px] border-[rgba(255,255,255,0.10)]">
          <h2 className="text-white">
            Copyright {date.getFullYear()} | Guide In Dubai All Rights Reserved
          </h2>
          <div className="flex items-center">
            <p className="text-[#C4C4C4] font-bold mr-[51px]">We accept</p>
            <img src="../assets/Paypal.svg" alt="" className="mr-[19px]" />
            <img src="../assets/masterCard.svg" alt="" className="mr-[19px]" />
            <img src="../assets/visa.svg" alt="" className="mr-[19px]" />
          </div>
        </div>
      </footer>
    </div>
  );
}
