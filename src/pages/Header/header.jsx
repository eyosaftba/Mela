import "./header.css";
import Navbar from "../../components/NavBar.jsx/Navbar";
import LogoImage from "../../assets/logo/mela_logo-removebg.webp";
// import LogoImage from "../../assets/logo/Mask_mela_logo.png";

const Header = () => {
  const Buttons = [
    {
      id: "login",
      name: "LogIn",
      url: "/login",
      icon: "",
      onclick,
      className: "header-button",
    },
    {
      id: "signup",
      name: "Sign up",
      url: "/signup",
      icon: "",
      onclick,
      className: "header-button",
    },
  ];

  return (
    <div className="home--layout">
      <Navbar
        isImage={true}
        ImageUrl={LogoImage}
        Text="Mela"
        Buttons={Buttons}
      />
    </div>
  );
};

export default Header;
