import Hero from "../components/Hero";
import Nav from "../components/Nav";
import FeaturesComponent from "../components/FeaturesContainer";

import image from "../assets/features/desktop/hero.jpg";
import Footer from "../components/Footer";
import GetInviteHero from "../components/GetInviteHero";

export default function Features() {
  return (
    <>
      <Nav />

      <Hero
        isDark={true}
        image={image}
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
