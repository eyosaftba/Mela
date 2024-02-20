import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/header";
import Banner from "../../components/Banner.jsx/Banner";
import NewsSlide from "../../components/NewsSlide/NewsSlide";

import BannerImg1 from "../../assets/images/banner_image_1.webp";
import BannerImg2 from "../../assets/images/banner_image_2.webp";
import BannerImg3 from "../../assets/images/banner_image_3.webp";

function Home() {
  return (
    <div>
      <Banner
        HeadlineValue={"Ethiopia: Captivating Culture, Timeless Beauty."}
        TextValue={
          "Ethiopia is a country that captivates with its rich and diverse culture, and its timeless beauty. From its ancient ruins, monolithic churches, and vibrant festivals."
        }
        ImageUrl1={
          BannerImg1
        }
        ImageUrl2={
          BannerImg2
        }
        ImageUrl3={
          BannerImg3
        }
        Text1={"Semien Mountains"}
        Text2={"Lalibela churches"}
        Text3={"Danakil Desert"}
      />
      <div className="content">
        <NewsSlide />
      </div>
    </div>
  );
}

export default Home;



