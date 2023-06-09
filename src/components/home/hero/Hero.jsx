import React from "react";
import "../../assets/style/hero.css";
import Title from "../../common/Title";

const Hero = () => {
  return (
    <div>
      <Title title={"Its Nabin"} />
      <img
        className="hero-img"
        src="https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1"
        alt="hero"
      />
    </div>
  );
};
const New = () => {
  return <div>new</div>;
};

export { New };
export default Hero;
