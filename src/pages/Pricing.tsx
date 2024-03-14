import Hero from "../components/Hero";
import Nav from "../components/Nav";

import image from "../assets/pricing/desktop/hero.jpg";
import Packages from "../components/Packages";
import Footer from "../components/Footer";
import GetInviteHero from "../components/GetInviteHero";
import PackageList from "../components/PackageList";

export default function Pricing() {
  return (
    <>
      <Nav />
      <Hero
        isDark={true}
        image={image}
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
