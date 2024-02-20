import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./pages/Header/header";
import Home from "./pages/Home/home";
import TopicsMenu from "./components/Topics/TopicsMenu";
import OnlineJob from "./topics/online_job";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";
import RegistrationSuccess from "./pages/Auth/registrationSuccess";
import { useEffect, useState } from "react";

function App() {

  // addEventListener("storage", (event) => {});

  window.addEventListener("storage", () => {
    // When local storage changes, dump the list to
    // the console.
    console.log("sampleList", JSON.parse(window.localStorage.getItem("status_isDark")));
  });


  const [status_isDark_parsed, setStatus_isDark_parsed] = useState();

  useEffect(() => {
    const status_isDark = localStorage.getItem("status_isDark");
    const status_isDark_parsed = JSON.parse(status_isDark);
    setStatus_isDark_parsed(status_isDark_parsed);
    console.log("status_isDark", status_isDark_parsed);
  }, []);

  return (
    <div className={status_isDark_parsed === true ? "dark_mode" : "app"}>
      <BrowserRouter>
        <div className="outlet--container">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/registration-success"
            element={<RegistrationSuccess />}
          />
        </Routes>
        <Routes>
          <Route
            path="/topics/online-jobs-careers-no-experience"
            element={<OnlineJob />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
