import React from "react";
import { useTranslation } from "react-i18next";
const Input = ({
  type,
  style,
  id,
  name,
  register,
  errors,
  placeholder,
  validate,
  value,
  ref,
  onChange,

  defaultValue,
}) => {
  const { t } = useTranslation();
  const validationRules = {
    required: `${name} ${t("required")}`,
  };

  if (type !== "email") {
    validationRules.minLength = {
      value: 1,
      message: `${name} ${t("least_8_characters")} `,
    };
  }

  if (type === "email") {
    validationRules.pattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: `${name} ${t("invalid_email")} `,
    };
  }

  if (validate) {
    validationRules.validate = validate;
  }

  return (
    <div className="relative mb-2">
      {type === "textarea" ? (
        <textarea
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          {...register(name, validationRules)}
          className="p-2 w-full  border-0 border-b border-gray-500/[.55]"
          style={style}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          // defaultValue={defaultValue}
          onChange={onChange}
          ref={ref}
          value={value}
          {...register(name, validationRules)}
          className="p-2 w-full  border-0 border-b border-gray-500/[.55]"
          style={style}
        />
      )}
      {errors[name] && (
        <p className="mt-2 text-xs text-red-600 absolute">
          {errors[name].message}
        </p>
      )}
    </div>
  );
};

export default Input;
