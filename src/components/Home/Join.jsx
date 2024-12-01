import React from "react";
import Back_Join from "../../assets/Back_JoinIn.png";
import Image from "../UI/Image";
import Input from "../UI/Input";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
const Join = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const onSubmit = (data) => {
    console.log("Email:", data.email);

    dispatch(
      setUser({
        email: data.email,
      })
    );
    navigate("/login");
  };
  return (
    <div className="tablet:relative bg-[#F2F4F6]  flex items-center  justify-center">
      <Image
        src={Back_Join}
        alt="Back_Join"
        className="w-full object-cover hidden tablet:block"
      />

      <div className="tablet:absolute flex flex-col items-center my-8 justify-center text-white text-center">
        <h1 className="text-4xl font-medium text-black mb-2">
          Join Our Newsletter
        </h1>
        <p className="text-2xl text-black mb-10">
          Sign up for deals, new products and promotions
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-2/3 text-black ">
          <Input
            type="email"
            id="email"
            name="email"
            register={register}
            errors={errors}
            placeholder={t("username_email")}
          />
        </form>
      </div>
    </div>
  );
};

export default Join;
