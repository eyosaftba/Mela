import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import Avatar from "../Avatar/Avatar";
import ButtonField from "../Button/Button";
import Logo from "../../assets/Ethiopia.png";
import TopicsMenu from "../Topics/TopicsMenu";
import UserMenu from "../UserMenu/UserMenu";

function Navbar(props) {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("sb-phezxikpdsjliablknoy-auth-token");
    const parsedUser = JSON.parse(user);
    console.log(parsedUser);
    if (parsedUser != null) {
      if (loggedUser == null) {
        setLoggedUser(parsedUser);
        setIsUser(true);
      }
    }
  });

  const { ImageUrl, Text, isImage, style, Buttons } = props;
  const [isUser, setIsUser] = useState(false);
  const [isTopicMenu, setIsTopicMenu] = useState(false);
  const [isUserMenu, setIsUserMenu] = useState(false);

  const Links = [
    {
      id: 1,
      name: "Ways to make money online",
      to: "/topics/online-jobs-careers-no-experience",
    },
    { id: 2, name: "Topics", to: "/about-ethiopia" },
    { id: 3, name: "Trending", to: "/trending" },
  ];

  const onmousedown = () => {
    setIsTopicMenu(isTopicMenu == false ? true : false);
  };

  console.log(loggedUser != null && loggedUser.user);

  return (
    <div className="nav-bar">
      <div className="logo--container" style={{ ...style }}>
        {isImage == true ? (
          <img src={ImageUrl} className="logo--img" />
        ) : (
          <div className="logo-container">
            <img src={Logo} className="logo-img" />
            <h1 style={{ width: "50px" }}>{Text}</h1>
          </div>
        )}
      </div>
      <div className="wide--nav">
        <div className="navlinks--container">
          <NavLink to={"/"} className="nav--link">
            Home
          </NavLink>

          <NavLink onMouseDown={onmousedown} className="nav--link">
            Topics
          </NavLink>
        </div>
        {isTopicMenu == true && (
          <>
            <div
              className="menu--bg"
              onClick={() => {
                setIsTopicMenu(false);
              }}
            ></div>
            <TopicsMenu NavLinks={Links} />
          </>
        )}
        <div>
          {isUser == true ? (
            <>
              <Avatar
                onClick={() => {
                  setIsUserMenu(isUserMenu == false ? true : false);
                }}
                userAvatar={loggedUser != null && loggedUser.user.email}
              />

              {isUserMenu == true && (
                <>
                  <div
                    onClick={() => {
                      setIsUserMenu(false);
                    }}
                    className="modal--back"
                  ></div>
                  <UserMenu />
                </>
              )}
            </>
          ) : (
            <div className="button-container">
              {Buttons.map((Button) => (
                <ButtonField
                  value={Button.name}
                  className={Button.className}
                  onClick={() => {
                    navigate(Button.url);
                  }}
                  style={{}}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  isImage: false,
  alt: "",
  name: "preloader",
  src: "",
  ImageUrl: "",
  Text: "Logo",
  style: {
    width: "100%",
    padding: "10px",
    margin: "10 auto",
    textTransform: "uppercase",
  },
};

export default Navbar;
