import React from "react";

const Avatar = (props) => {
  const { alt, style, src, userAvatar,  onClick } = props;

  return (
    <div style={style} 
    onClick={onClick}
    >
      <img
        alt={alt}
        style={{
          display: "none",
          width: "50px",
          margin: "0 40%",
          padding: "5px",
        }}
        src={src}
      />
      <h1
        style={{
          backgroundColor: "#2f313f",
          color: "#fff",
          fontSize: "25px",
          textAlign: "center",
          padding: "5px",
          width: "32px",
          borderRadius: "100px",
          cursor: "pointer"
        }}
      >
        {userAvatar?.length > 0 && userAvatar.toUpperCase().charAt(0)}
      </h1>
    </div>
  );
};

Avatar.defaultProps = {
  alt: "",
  name: "preloader",
  src: "",
  text: "",
  style: {
    width: "40px",
    padding: "10px",
    margin: "10 auto",
  },
};

export default Avatar;
