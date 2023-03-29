import { HeaderNav } from "./components/Header";
import { Slider } from "./components/Slider";
import { Footer } from "./components/Footer";
import { CoffeeCard } from "./components/CoffeeCard";

export const App = () => {
  return (
    // 各コンポーネントの入り口
    <div className="App">
      <HeaderNav />
      <Slider />
      <CoffeeCard />
      <Footer />
    </div>
  );
};
