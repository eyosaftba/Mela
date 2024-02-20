import React, { useState } from "react";
import "./banner.css";
// import { Button } from 'antd'
// import { useTranslation } from 'react-i18next'
// import { COLORS } from 'assets/stlyes/theme'
// import Icon from '../icons/customIcon'

const Banner = (props) => {
  // const { t } = useTranslation()
  const {
    HeadlineValue,
    TextValue,
    Text1,
    Text2,
    Text3,
    ImageUrl1,
    ImageUrl2,
    ImageUrl3,
    style,
  } = props;

  return (
    <div className="banner--container">
      <div className="banner-headline">
        <div className="banner-headline-text">
          <h1> {HeadlineValue} </h1>
          <h4> {TextValue} </h4>
        </div>
        <div className="banner-headline-image">
          {/* <img src={ImageUrl} /> */}
          <div className="gallery">
            <div
              className="gallery-col"
              style={{
                backgroundImage: `url(${ImageUrl1})`,
              }}
            >
              <p> {Text1} </p>
            </div>
            <div className="gallery-box">
              <div
                className="gallery-row"
                style={{
                  backgroundImage: `url(${ImageUrl2})`,
                }}
              >
                <p> {Text2} </p>
              </div>
              <div
                className="gallery-row"
                style={{
                  backgroundImage: `url(${ImageUrl3})`,
                }}
              >
                <p> {Text3} </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Banner.defaultProps = {
  value: "",
  type: "primary",
  isEditable: true,
  style: {
    background: "#000",
    borderColor: "#000",
    color: "#fff",
    alignSelf: "right",
    width: "100%",
    height: 28,
    padding: 2,
  },
};

export default Banner;
