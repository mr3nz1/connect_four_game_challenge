import Hero from "../components/Hero";
import Nav from "../components/Nav";

import image from "../assets/pricing/desktop/hero.jpg";
import mobileImage from "../assets/pricing/tablet/hero.jpg";

import Packages from "../components/Packages";
import Footer from "../components/Footer";
import GetInviteHero from "../components/GetInviteHero";
import PackageList from "../components/PackageList";
import { useEffect, useState } from "react";

export default function Pricing() {
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
        title="Pricing"
        description="  Create a your stories, Photosnap is a platform for photographers and visual storytellers. 
        It’s the simple way to create and share your photos."
        isColoredLineOpen={true}
        isReverse={false}
      />
      <Packages />

      <PackageList />
      <GetInviteHero />
      <Footer />
    </>
  );
}
