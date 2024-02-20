import React, { useEffect, useState } from "react";
import "./userMenu.css";
import Avatar from "../Avatar/Avatar";
import { RiLogoutCircleLine, RiVerifiedBadgeFill } from "react-icons/ri";
import Splitter from "../ReuseComponents/Splitter";
import { createClient } from "@supabase/supabase-js";
import { useLocation } from "react-router-dom";
import SavedArticlesList from "../../pages/SavedArticles/savedArticlesList";
import Links from "../../Data/links";

function UserMenu() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [isDarck, setIsDark] = useState();

  const supabase = createClient(
    "https://phezxikpdsjliablknoy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZXp4aWtwZHNqbGlhYmxrbm95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNjU5MzUsImV4cCI6MjAxODY0MTkzNX0.hNQpF6Uz653hsVofmmM1JYaFXjQ9U8luBdNDLLQxdLw"
  );

  useEffect(() => {
    const user = localStorage.getItem("sb-phezxikpdsjliablknoy-auth-token");
    const parsedUser = JSON.parse(user);
    console.log(parsedUser);
    if (parsedUser != null) {
      if (loggedUser == null) {
        setLoggedUser(parsedUser);
      }
    }
  });

  console.log("links", Links);

  return (
    <div className="user-menu--container">
      <div className="user--profile">
        <Avatar userAvatar={loggedUser != null && loggedUser.user.email} />
        <div className="email-section">
          <p className="user-email">
            {loggedUser != null && loggedUser.user.email}
          </p>
          <p className="Verified">
            {loggedUser != null && loggedUser.user.confirmed_at && (
              <div className="Verified-text">
                <RiVerifiedBadgeFill />
                <span> Verified </span>
              </div>
            )}
          </p>
        </div>
      </div>
      <Splitter />
      <SavedArticlesList />
      <Splitter />
      <div className="settings-container">
        <strong className="user-menu-title">
          <span> Settings </span>
        </strong>
        {Links.map((link) => (
          <div
            onClick={() => {
              localStorage.setItem(
                "status_isDark",
                isDarck == false ? true : false
              );
              setIsDark(isDarck == false ? true : false);
              window.location.reload();
            }}
            className="settings-link"
          >
            <span> {link.name} </span>
            <span> {link.icon_dark} </span>
          </div>
        ))}
      </div>
      <Splitter />
      <div className="profile-links">
        <span
          className="logout-btn"
          onClick={async () => {
            const { error } = await supabase.auth.signOut();
            window.location.reload(false);
          }}
        >
          <RiLogoutCircleLine className="Icon"/> <span> Log Out </span>
        </span>
      </div>
    </div>
  );
}

export default UserMenu;
