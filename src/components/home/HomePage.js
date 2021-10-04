import { Helmet } from "react-helmet";
import GalleryImages from "./GalleryImages";
import FeatureStories from "./FeatureStories";
import Jumbotron from "./JumbotronPage";
import LunarStarship from "./LunarStarship";
import NextLaunch from "./NextLaunch";
import VirtualSimulator from "./VirtualSimulator";

function Home() {
  return (
    <main id="home">
      <Helmet>
        <title>
          Would you like to be enable to experience a journey of discovery in
          space? | Join us at Galaxy SpaceX
        </title>
        <meta
          name="description"
          content="Experience a journey of discovery with advanced rockets and spaceships only with the #1 space microsite - Galaxy SpaceX"
        />
      </Helmet>
      <Jumbotron />
      <NextLaunch />
      <VirtualSimulator />
      <LunarStarship />
      <FeatureStories />
      <GalleryImages />
    </main>
  );
}

export default Home;
