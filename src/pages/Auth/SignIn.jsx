import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import pic_sign_in from "../../assets/Background_Auth.png";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import Image from "../../components/UI/Image";
import { setUser } from "../../store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { loginUser } from "../../api/authAPI";
import { login } from "../../store/authSlice";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const { t } = useTranslation();
  
 const storedEmail = localStorage.getItem("email");

  const navigate = useNavigate();
  useEffect(() => {
     
    if (storedEmail) {
      setValue("email", storedEmail);
    }
  }, [setValue]);

  const onSubmit = async (data) => {
   const response = await loginUser(data);
   console.log("response", response);
   if (response.accessToken) {
     localStorage.setItem("token", response.accessToken);
     dispatch(login(response.accessToken));
     navigate("/");
   } else {
     message.error(response.message);
   }

    dispatch(
      setUser({
        email: data.email,
        remember: data.remember,
      })
    );

    if (data.remember) {
      localStorage.setItem("email", data.email);
    } else {
      localStorage.removeItem("email");
    }
  };

  return (
    <div className="mobile:flex flex-col  laptop:grid grid-cols-2 gap-2 w-full">
      <Image
        src={pic_sign_in}
        alt="pic_sign_in"
        className="object-cover mobile:h-full  laptop:h-screen w-full"
      />

      <div className="flex items-center justify-center">
        <div className="flex flex-col w-2/3 mobile:gap-4 laptop:w-1/2 gap-5">
          <h1 className="font-bold mobile:text-3xl laptop:text-4xl">
            {t("sign_in")}
          </h1>
          <p className="text-gray-400 mobile:text-xs laptop:text-base">
            {t("no_account")}{" "}
            <Link to="/register" className="text-green-500 font-bold">
              {t("sign_up")}
            </Link>
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full mobile:gap-8 text-xs laptop:text-base gap-8"
          >
            <Input
              type="email"
              id="email"
              name="email"
              register={register}
              errors={errors}
              placeholder={t("username_email")}
            />
            <Input
              type="password"
              id="password"
              name="password"
              register={register}
              errors={errors}
              placeholder={t("password")}
            />
            <div className="flex items-center justify-between">
              <div className="flex">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  {...register("remember", { required: false })}
                />
                <label htmlFor="remember" className="ml-2">
                  {t("remember")}
                </label>
              </div>
              <Link to="/register" className="text-sm text-back-500 font-bold">
                {t("forgot")}?
              </Link>
            </div>
            <Button
              type="submit"
              isValid={isValid}
              classNames="w-full bg-black text-white p-2 rounded mobile:mb-8 laptop:mb-0"
              content={t("sign_in")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
