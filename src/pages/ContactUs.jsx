import React from "react";
import Image from "../components/UI/Image";
import backAboutUs from "../assets/aboutUs_back.png";
import { HomeIcon, PhoneIcon, EmailIcon, IconNarrow } from "../assets/icon";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";
import SupportServices from "../components/Home/SupportServices";
const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="tablet:mx-28 px-5 ">
      <div>
        Home {" >"}
        <span className="font-medium"> Contact Us</span>
      </div>
      <div className="mt-10 tablet:w-2/3   ">
        <h1 className="text-6xl font-semibold mb-7 ">
          We believe in sustainable decor. We’re passionate about life at home.
        </h1>
        <p className="text-lg">
          Our features timeless furniture, with natural fabrics, curved lines,
          plenty of mirrors and classic design, which can be incorporated into
          any decor project. The pieces enchant for their sobriety, to last for
          generations, faithful to the shapes of each period, with a touch of
          the present
        </p>
      </div>
      <div className="tablet:grid grid-cols-2 mt-10 ">
        <Image src={backAboutUs} className={"w-full"} />
        <div className=" bg-gray-300 flex flex-col justify-center tablet:items-center">
          <div className="tablet:w-3/4 my-10 ml-6 ">
            <h1 className="text-5xl font-semibold mb-4">About Us</h1>
            <p className="text-xl font-light mb-6">
              3legant is a gift & decorations store based in HCMC, Vietnam. Est
              since 2019.
              <br />
              Our customer service is always prepared to support you 24/7
            </p>
            <Link to="/">
              <button className="font-normal text-xl gap-1 flex items-center relative">
                Shop Now
                <IconNarrow />
                <span className="absolute left-0 bottom-0 h-[2px] bg-black w-full"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-8 items-center">
        <h1 className="text-5xl font-semibold">Contact Us</h1>
        <div className="tablet:grid grid-cols-3 w-full tablet:gap-8 justify-between">
          <div className="flex flex-col items-center my-6 bg-gray-300 justify-center gap-2 p-10 ">
            <HomeIcon />
            <h1 className="text-2xl font-semibold text-gray-500">Address</h1>
            <p className="text-xl font-semibold ">
              234 Hai Trieu, Ho Chi Minh City, Viet Nam
            </p>
          </div>
          <div className="flex flex-col items-center my-6 bg-gray-300 justify-center gap-2 p-10 ">
            <PhoneIcon />
            <h1 className="text-2xl font-semibold text-gray-500">Phone</h1>
            <p className="text-xl font-semibold ">+84 909 090 090</p>
          </div>
          <div className="flex flex-col items-center my-6 bg-gray-300 justify-center gap-2 p-10 ">
            <EmailIcon />
            <h1 className="text-2xl font-semibold text-gray-500">Email</h1>
            <p className="text-xl font-semibold ">info@3legant.com</p>
          </div>
        </div>
        <div className=" tablet:grid w-full  grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full h-full gap-1"
          >
            <p className="text-xl font-semibold "> Full Name</p>
            <Input
              type="text"
              id="fullname"
              name="fullname"
              register={register}
              errors={errors}
              placeholder={"Your Name"}
              style={{
                border: "1px solid black",
              }}
            />
            <p className="text-xl font-semibold mt-4"> Email Address</p>
            <Input
              type="email"
              id="email"
              name="email"
              register={register}
              errors={errors}
              placeholder={"Your Email"}
              style={{
                border: "1px solid black",
              }}
            />
            <p className="text-xl font-semibold mt-4"> Message</p>
            <Input
              type="textarea"
              id="message"
              name="message"
              register={register}
              errors={errors}
              placeholder={"Your Message"}
              style={{
                height: "150px",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid black",
              }}
            />
            <Button
              type="submit"
              isValid={isValid}
              classNames="w-1/3 bg-black text-white p-3 rounded mobile:mb-8 laptop:mb-0"
              content={"Send Message"}
            />
          </form>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.6963535015257!2d105.79263174429613!3d20.964705794507328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adc9b6971c47%3A0x7899da5393628370!2zVHLGsOG7nW5nIFRIUFQgTmfDtCBHaWEgVOG7sSAtIEjDoCDEkMO0bmc!5e0!3m2!1svi!2s!4v1728405711524!5m2!1svi!2s"
            className="w-full h-[500px] sm:h-full"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-screen h-fit bg-gray-200">
          <SupportServices />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
