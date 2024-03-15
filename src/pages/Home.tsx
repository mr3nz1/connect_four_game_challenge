import Hero from "../components/Hero";
import Nav from "../components/Nav";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";
import FeaturesContainer from "../components/FeaturesContainer";

import createAndShareImage from "../assets/home/desktop/create-and-share.jpg";
import designedForEveryOneImage from "../assets/home/desktop/designed-for-everyone.jpg";
import beautifulStoriesImage from "../assets/home/desktop/beautiful-stories.jpg";

import createAndShareMobileImage from "../assets/home/tablet/create-and-share.jpg";
import designedForEveryOneMobileImage from "../assets/home/tablet/designed-for-everyone.jpg";
import beautifulStoriesMobileImage from "../assets/home/tablet/beautiful-stories.jpg";

import mountainsImage from "../assets/stories/desktop/mountains.jpg";
import cityScapesImage from "../assets/stories/desktop/cityscapes.jpg";
import voyageImage from "../assets/stories/desktop/18-days-voyage.jpg";
import architectureImage from "../assets/stories/desktop/architecturals.jpg";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [appropriateImages, setAppropriateImages] = useState({
    createAndShareImage: createAndShareImage,
    designedForEveryOneImage: designedForEveryOneImage,
    beautifulStoriesImage: beautifulStoriesImage,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (screenWidth <= 680) {
      return setAppropriateImages({
        createAndShareImage: createAndShareImage,
        designedForEveryOneImage: designedForEveryOneImage,
        beautifulStoriesImage: beautifulStoriesImage,
      });
    }

    if (screenWidth <= 1250) {
      return setAppropriateImages({
        createAndShareImage: createAndShareMobileImage,
        designedForEveryOneImage: designedForEveryOneMobileImage,
        beautifulStoriesImage: beautifulStoriesMobileImage,
      });
    }

    return setAppropriateImages({
      createAndShareImage: createAndShareImage,
      designedForEveryOneImage: designedForEveryOneImage,
      beautifulStoriesImage: beautifulStoriesImage,
    });
  }, [screenWidth]);

  return (
    <>
      <Nav />
      <Hero
        title={"Create and share your photo Stories"}
        description="Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others."
        buttonText="Get an invite"
        isReverse={false}
        image={appropriateImages["createAndShareImage"]}
        isDark={true}
        isColoredLineOpen={true}
      />
      <Hero
        title={"Beautiful stories every time"}
        description="We provide design templates to ensure your stories look terrific. Easily add 
        photos, text, embed maps and media from other networks. Then share your story 
        with everyone."
        buttonText="View the stories"
        isReverse={true}
        image={appropriateImages["beautifulStoriesImage"]}
        isDark={false}
        isColoredLineOpen={false}
      />
      <Hero
        title="Designed for everyone"
        description="Photosnap can help you create stories that resonate with your audience.  Our 
        tool is designed for photographers of all levels, brands, businesses you name it."
        buttonText="View the stories"
        isReverse={false}
        image={appropriateImages["designedForEveryOneImage"]}
        isDark={true}
        isColoredLineOpen={false}
      />
      <CardContainer>
        <Card
          image={mountainsImage}
          title="The Mountains"
          author="by John Appleseed"
        />
        <Card
          image={cityScapesImage}
          title="Sunset Cityscapes"
          author="by Benjamin Cruz"
        />
        <Card
          image={voyageImage}
          title="18 Days Voyage"
          author="by Alexei Borodin"
        />
        <Card
          image={architectureImage}
          title="Architecturals"
          author="by Samantha Brooke"
        />
      </CardContainer>

      <FeaturesContainer numberOfFeatures={3} />

      <Footer />
    </>
  );
}
