import Nav from "../components/Nav";
import StoriesHero from "../components/StoriesHero";
import CardContainer from "../components/CardContainer";
import Card from "../components/Card";

// import mountainsImage from "../assets/stories/desktop/mountains.jpg";
// import cityScapesImage from "../assets/stories/desktop/cityscapes.jpg";
// import voyageImage from "../assets/stories/desktop/18-days-voyage.jpg";
// import architectureImage from "../assets/stories/desktop/architecturals.jpg";
import Footer from "../components/Footer";

import stories from "../stories.json";

export default function Stories() {
  return (
    <>
      <Nav />
      <StoriesHero />
      <CardContainer>
        {stories.map(
          ({
            id,
            date,
            title,
            author,
            image,
          }: {
            id: number;
            date: string;
            title: string;
            author: string;
            image: string;
          }) => {
            return (
              <Card
                key={id}
                image={image}
                title={title}
                author={author}
                date={date}
              />
            );
          }
        )}
      </CardContainer>
      <Footer />
    </>
  );
}
