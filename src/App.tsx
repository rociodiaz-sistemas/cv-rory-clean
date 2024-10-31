import "./App.css";
import ParallaxLayers from "./components/parallax/ParallaxLayers";
import StarField from "./components/starfield/Starfield";

function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <ParallaxLayers />
      <StarField />
    </div>
  );
}

export default App;
