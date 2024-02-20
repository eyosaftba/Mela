import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { createClient } from "@supabase/supabase-js";
import "./saveArticle.css";
import { FaBookmark } from "react-icons/fa";
import ErrorMessage from "../ReuseComponents/ErrorMessage";

function SaveArticle(props) {
  const { status } = props;

  console.log("status", status);

  const navigate = useNavigate();
  const location = useLocation();
  const [loggedUser, setLoggedUser] = useState(null);
  const [savedArticle, setSavedArticle] = useState(false);
  const [savedArticleObject, setSavedArticleObject] = useState({
    articleUrl: "",
    userID: null,
  });

  const [showErr, setShowErr] = useState(false);
  const [Err, setErr] = useState();
  const supabase = createClient(
    "https://phezxikpdsjliablknoy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZXp4aWtwZHNqbGlhYmxrbm95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNjU5MzUsImV4cCI6MjAxODY0MTkzNX0.hNQpF6Uz653hsVofmmM1JYaFXjQ9U8luBdNDLLQxdLw"
  );

  const user = localStorage.getItem("sb-phezxikpdsjliablknoy-auth-token");
  const parsedUser = JSON.parse(user);

  useEffect(() => {
    if (parsedUser != null) {
      if (loggedUser == null) {
        setLoggedUser(parsedUser);
        getUser();
      }
    }
  });

  useEffect(() => {
    getSavedArticles();
  }, []);


  const getUser = () => {
    // if (loggedUser != null) {
    setSavedArticleObject({
      articleUrl: location.pathname,
      userID: parsedUser?.user.id,
    });
    // }
  };

  const SaveMyArticle = async () => {
    if (savedArticleObject.userID != null) {
      const { data, error } = await supabase
        .from("SavedArticle")
        .insert(savedArticleObject)
        .select();
      if (data) {
        setSavedArticle(true);
      }
    } else if (savedArticleObject.userID == null) {
      navigate("/login");
    }
  };

  const getSavedArticles = async () => {
    const { data, error } = await supabase
      .from("SavedArticle")
      .select()
      .eq("userID", parsedUser?.user.id);
    if (data) {
      console.log(data);
      const isEx = data.filter((filtered) => {
        return filtered.articleUrl == location.pathname;
      });
      console.log("isEx", isEx.length > 0);
      isEx.length > 0 && setSavedArticle(true);
      isEx.length == 0 && setSavedArticle(false);
    }
  };

  const ShowErrMsg = (e) => {
    setShowErr(true);
    setErr(e);
    setTimeout(() => {
      setShowErr(false);
      setErr("");
    }, 5000);
  };

  console.log("savedArticleObject", savedArticleObject);

  return (
    <div className="saved-article-icon">
      {showErr == true && (
        <div className="message-section">
          <ErrorMessage
            style={{
              display: "flex",
              background: "green",
              borderRadius: "5px",
              color: "#fff",
              fontSize: "13px",
              padding: "3px",
            }}
            errorMessage={Err}
          />
        </div>
      )}

      {savedArticle == false ? (
        <CiBookmark
          onClick={() => {
            SaveMyArticle();
          }}
          className="blog--save-article"
        />
      ) : (
        <FaBookmark
          onClick={() => {
            ShowErrMsg("Already Saved!");
          }}
          className="blog--save-article"
        />
      )}
    </div>
  );
}

export default SaveArticle;
