import { useTranslation } from "react-i18next";
import React from "react";

import Banner from "../components/Home/Banner";
import Shop_Collection from "../components/Home/Shop_Collection";
import New_Arrivals from "../components/Home/New_Arrivals";
import BestSeller from "../components/Home/Best_Seller";
import Seller from "../components/Home/Seller";
import SupportServices from "../components/Home/SupportServices";
import Contact from "../components/Home/Contact";
import Join from "../components/Home/Join";

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full ">
        <Banner />
        <New_Arrivals />
        {<Shop_Collection />}
        {<BestSeller />}
        {<Seller />}
        {<SupportServices />}
        <Contact />
        <Join />
      </div>
    </>
  );
};

export default Home;
