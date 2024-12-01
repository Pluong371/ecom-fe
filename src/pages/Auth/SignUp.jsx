import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputCustom from "../../components/UI/Input";
import pic_sign_in from "../../assets/Background_Auth.png";
import Image from "../../components/UI/Image";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button";
import { t } from "i18next";
import { setUser } from "../../store/userSlice";
import { verifyOtp } from "../../api/authAPI";
import { useDispatch } from "react-redux";
import { registerUser } from "../../api/authAPI";
import { message, Modal, Flex, Input, Typography } from "antd";
import { HttpStatusCode } from "axios";
const { Title } = Typography;
const SignUp = () => {
  const [otp, setOtp] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const [isRegister, setIsRegister] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [apiSuccess, setApiSuccess] = useState(false);
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  console.log("password", password);
  console.log("confirmPassword", confirmPassword);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const onSubmit = async (data) => {
    const dataToSend = {
      firstName: data.first_name,
      lastName: data.last_name,
      email: data.email,
      password: data.password,
    };
    setEmail(data.email);

    const response = await registerUser(dataToSend);
    console.log("response", response);
    if (response.status === HttpStatusCode.OK) {
      message.success(t("sign_up_success"));
      setIsRegister(true);
    } else {
      message.error(response.message);
    }
  };

  const onChange = async (value) => {
    setOtp(value);
    const dataVerify = {
      email: email,
      otp: value,
    };

    if (value.length === 6) {
      const responseData = await verifyOtp(dataVerify);

      if (responseData.status === HttpStatusCode.OK) {
        message.success(t("verify_otp_success"));
        setApiSuccess(true);
        if (localStorage.getItem("token")) {
          localStorage.removeItem("token");
          
        }
        localStorage.setItem("token", responseData.accessToken);
        navigate("/");
      } else {
        message.error(responseData.message);
      }
    }
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setIsRegister(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOtp("");
    setIsRegister(false);
  };

  return (
    <div className="gap-10 mobile:flex flex-col laptop:grid grid-cols-2 laptop:gap-2  w-full">
      <Image
        src={pic_sign_in}
        alt="pic_sign_in"
        className="object-cover mobile:h-full laptop:h-screen w-full"
      />
      <div className="flex items-center justify-center">
        <div className="flex flex-col w-2/3 mobile:gap-4 laptop:w-1/2 gap-5">
          <h1 className="font-bold mobile:text-3xl laptop:text-4xl">
            {t("sign_up")}
          </h1>
          <p className="text-gray-400 mobile:text-xs laptop:text-base">
            {t("have_account")}{" "}
            <Link to="/login" className="text-green-500 font-bold">
              {t("sign_in")}
            </Link>
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full text-xs laptop:text-base gap-8"
          >
            <InputCustom
              type="name"
              id="first_name"
              name="first_name"
              register={register}
              errors={errors}
              placeholder="first_name"
            />
            <InputCustom
              type="username"
              id="last_name"
              name="last_name"
              register={register}
              errors={errors}
              placeholder="last_name"
            />
            <InputCustom
              type="email"
              id="email"
              name="email"
              register={register}
              errors={errors}
              placeholder={t("email_address")}
            />
            <InputCustom
              type="password"
              id="password"
              name="password"
              register={register}
              errors={errors}
              placeholder={t("password")}
            />
            <InputCustom
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              register={register}
              errors={errors}
              placeholder={t("confirm_password")}
              validate={(value) => {
                console.log("value", value);
                return value === password || t("password_mismatch");
              }}
            />

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="Agree"
                  {...register("Agree", { required: true })}
                />
                <label htmlFor="Agree" className="ml-2 text-gray-400 ">
                  I agree with
                  <span className="font-bold text-black">
                    {" "}
                    Privacy Policy
                  </span>{" "}
                  and
                  <span className="font-bold text-black"> Terms of Use</span>
                </label>
              </div>
            </div>
            <Modal
              title="Title"
              open={isRegister}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <div className="flex flex-col items-center justify-center p-10">
                {apiSuccess ? (
                  <h1 className="text-2xl font-bold text-green-500">
                    Success, Hello {email}
                  </h1>
                ) : (
                  <>
                    <h1 className="flex text-2xl font-bold">Xác thực email</h1>
                    <p>Please check your email for OTP</p>
                    <Flex gap="middle" align="flex-start" vertical>
                      <Title level={5}>Enter OTP</Title>
                      <Input.OTP value={otp} onChange={onChange} length={6} />
                    </Flex>
                  </>
                )}
              </div>
            </Modal>
            <Button
              type="submit"
              isValid={isValid}
              classNames="w-full bg-black text-white p-2 rounded mobile:mb-8  laptop:mb-0 "
              content={t("sign_up")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
