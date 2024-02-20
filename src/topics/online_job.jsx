import React from "react";
import SaveArticle from "../components/Save/SaveArticle";

import "./style.css";

function OnlineJob() {
  return (
    <div className="blog--container">
      <div className="blog--title">
        <h1> 10 ways to make money online </h1>
        <SaveArticle />
      </div>

      <div className="blog-summery">
        <p>
          There are several ways to make money online. This article provides
          various ways to make money online, including freelancing, online
          surveys, selling products, affiliate marketing, online tutoring,
          content creation, virtual assistant services, online courses, stock
          trading, and blogging. It emphasizes the importance of researching and
          choosing methods that align with one's skills and interests, while
          also being cautious of potential scams and prioritizing safety and
          privacy when working online.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        }}
        className="blog--image"
      >
        image
      </div>
      <div className="blog-list--content">
        <h3> Freelancing</h3>
        <p className="blog-article--paragraph">
          Offer your skills and services as a freelancer on websites like
          Upwork, Fiverr, or Freelancer. You can offer services such as writing,
          graphic design, web development, and more.
        </p>
        <h3> Online surveys and market research</h3>
        <p className="blog-article--paragraph">
          Online surveys and market research: Participate in online surveys and
          market research studies to earn money and rewards.
        </p>
        <h3>Selling products</h3>
        <p className="blog-article--paragraph">
          Selling products: Start an online store and sell products through
          platforms like Amazon, eBay, or Etsy.
        </p>
        <h3> Affiliate marketing </h3>
        <p className="blog-article--paragraph">
          Affiliate marketing: Promote products or services and earn a
          commission for every sale made through your referral link.
        </p>
        <h3> Online tutoring or teaching </h3>
        <p className="blog-article--paragraph">
          Online tutoring or teaching: Offer tutoring or teaching services in a
          specific subject or skill through platforms like VIPKid, Chegg Tutors,
          or Skillshare.
        </p>
        <h3> Content creation </h3>
        <p className="blog-article--paragraph">
          Content creation: Create and monetize content on platforms like
          YouTube, TikTok, or Twitch through ads, sponsorships, and donations.
        </p>
        <h3> Virtual assistant </h3>
        <p className="blog-article--paragraph">
          Virtual assistant: Offer administrative and support services to
          businesses and entrepreneurs as a virtual assistant.
        </p>
        <h3> Online courses and coaching </h3>
        <p className="blog-article--paragraph">
          Online courses and coaching: Create and sell online courses or
          coaching services in a specific niche or skill.
        </p>
        <h3> Stock trading and investing </h3>
        <p className="blog-article--paragraph">
          Stock trading and investing: Invest in stocks, cryptocurrencies, or
          other financial instruments through online trading platforms.
        </p>
        <h3> Blogging</h3>
        <p className="blog-article--paragraph">
          Blogging: Start a blog and monetize it through advertising, sponsored
          content, and affiliate marketing.
        </p>
        <div className="blog--outro">
          <p>
            It's important to research and choose the method that best suits
            your skills, interests, and resources. Additionally, be cautious of
            potential scams and always prioritize your safety and privacy when
            working online.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OnlineJob;
