import Newcomp from "./Newcomp";
import CATS from "./data/cats";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  const [catImage, setImage] = useState(0);

  return (
    <div className="flex justify-center items-center">
      <Analytics />

      {catImage > 0 && (
        <button onClick={() => setImage(catImage - 1)} className="text-5xl">
          <FaArrowCircleLeft />
        </button>
      )}

      <Newcomp cat={CATS[catImage]} />

      {catImage < CATS.length - 1 && (
        <button onClick={() => setImage(catImage + 1)} className="text-5xl">
          <FaArrowCircleRight />
        </button>
      )}
    </div>
  );
};

export default App;
