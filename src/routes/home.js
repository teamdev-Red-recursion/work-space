import { HeaderNav } from "../components/Header";
import { Slider } from "../components/Slider";
import { CoffeeCard } from "../components/CoffeeCard";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <HeaderNav />
      <Slider />
      <CoffeeCard />
      <Footer />
    </>
  );
}
