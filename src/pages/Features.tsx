import Hero from "../components/Hero";
import Nav from "../components/Nav";
import FeaturesComponent from "../components/FeaturesContainer";

import image from "../assets/features/desktop/hero.jpg";
import mobileImage from "../assets/features/tablet/hero.jpg";
import Footer from "../components/Footer";
import GetInviteHero from "../components/GetInviteHero";
import { useEffect, useState } from "react";

export default function Features() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [appropriateImages, setAppropriateImages] = useState({
    image: mobileImage,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (screenWidth <= 680) {
      return setAppropriateImages({
        image: image,
      });
    }
    if (screenWidth <= 1250) {
      return setAppropriateImages({
        image: mobileImage,
      });
    }

    return setAppropriateImages({
      image: image,
    });
  }, [screenWidth]);

  return (
    <>
      <Nav />

      <Hero
        isDark={true}
        image={appropriateImages["image"]}
        title="features"
        description="We make sure all of our features are designed to be loved by every aspiring and even 
  professional photograpers who wanted to share their stories.
"
        isColoredLineOpen={true}
        isReverse={false}
      />

      <FeaturesComponent numberOfFeatures={6} />
      <GetInviteHero />
      <Footer />
    </>
  );
}
