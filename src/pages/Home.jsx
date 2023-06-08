import React from "react";
import Hero from "../components/home/hero/Hero";
import LearnMore from "../components/home/learn-more/LearnMore";
import GetStarted from "../components/home/get-started/GetStarted";
import Project from "../components/home/project/Project";
import NewsLetter from "../components/home/news-letter/NewsLetter";

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* learn more */}
      <LearnMore />
      {/* get started */}
      <GetStarted />
      {/* project */}
      <Project />
      {/* news letter */}
      <NewsLetter />
    </div>
  );
};

export default Home;
