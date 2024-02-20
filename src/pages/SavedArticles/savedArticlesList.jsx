import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { NavLink } from "react-router-dom";
import "./savedArticleList.css";
import { FaBookmark } from "react-icons/fa";
import { MdBookmarkRemove } from "react-icons/md";
import SaveArticle from "../../components/Save/SaveArticle";

function SavedArticlesList() {
  const [loggedUser, setLoggedUser] = useState(null);
  const [issavedArticle, setIsSavedArticle] = useState(false);
  const [savedArticles, setSavedArticle] = useState(false);

  const [savedStatus, setSavedStatus] = useState();

  const supabase = createClient(
    "https://phezxikpdsjliablknoy.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBoZXp4aWtwZHNqbGlhYmxrbm95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwNjU5MzUsImV4cCI6MjAxODY0MTkzNX0.hNQpF6Uz653hsVofmmM1JYaFXjQ9U8luBdNDLLQxdLw"
  );

  const user = localStorage.getItem("sb-phezxikpdsjliablknoy-auth-token");
  const parsedUser = JSON.parse(user);

  useEffect(() => {
    const user = localStorage.getItem("sb-phezxikpdsjliablknoy-auth-token");
    const parsedUser = JSON.parse(user);
    console.log(parsedUser);
    if (parsedUser != null) {
      if (loggedUser == null) {
        setLoggedUser(parsedUser);
        getSavedArticles();
      }
    }
  });

  const getSavedArticles = async () => {
    const { data, error } = await supabase
      .from("SavedArticle")
      .select()
      .eq("userID", parsedUser?.user.id);
    if (data) {
      setSavedArticle(data);
      data.length > 0 && setIsSavedArticle(true);
    }
  };

  const removeArticle = async (e) => {
    const { error } = await supabase.from("SavedArticle").delete().eq("id", e);
    if (!error) {
      getSavedArticles();
      window.location.reload();
    //   setSavedStatus(false);
    }
  };

  return (
    <>
      <div className="saved-article-label">
        <FaBookmark className="Icon" /> <p> Saved articles </p>
      </div>

      {issavedArticle == true ? (
        <div className="saved-article-links-container">
          {savedArticles.map((savedArticle) => (
            <>
              <div className="saved-article-links">
                <NavLink
                  className="saved-article-link"
                  to={savedArticle.articleUrl}
                >
                  {savedArticle.articleUrl}
                </NavLink>

                <MdBookmarkRemove
                  className="remove-icon"
                  onClick={() => {
                    removeArticle(savedArticle.id);
                  }}
                />
              </div>
            </>
          ))}
        </div>
      ) : (
        <>
          <p className="no-articles-found-msg"> No articles found </p>
        </>
      )}
    </>
  );
}

export default SavedArticlesList;
