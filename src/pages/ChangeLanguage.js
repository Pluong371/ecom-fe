import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const toggleLanguageOptions = () => {
    setShowLanguageOptions(!showLanguageOptions); // Bật tắt danh sách ngôn ngữ
  };
  return (
    <div>
      <p
        className="cursor-pointer hover:text-black"
        onClick={toggleLanguageOptions} // Bật tắt khi click vào
      >
        Language
      </p>
      {showLanguageOptions && (
        <div className="absolute left-full top-0 bg-slate-100 rounded-lg py-2 px-3 shadow-lg">
          <p
            className="cursor-pointer hover:text-black"
            onClick={() => changeLanguage("en")}
          >
            English
          </p>
          <p
            className="cursor-pointer hover:text-black"
            onClick={() => changeLanguage("vn")}
          >
            Vietnamese
          </p>
        </div>
      )}
    </div>
  );
}
