import Newcomp from "./Newcomp";
import CATS from "./data/cats";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState } from "react";
const App = () => {
  const [catImage, setImage] = useState(0);
  return (
    <div className="flex justify-center items-center  ">
      <div className="">
        {catImage > 0 && (
          <button
            onClick={() => {
              if (catImage > 0) {
                setImage(catImage - 1);
              }
            }}
            className="text-5xl "
          >
            <FaArrowCircleLeft />
          </button>
        )}
      </div>
      <div className="">
        <Newcomp cat={CATS[catImage]} />
      </div>
      <div className="">
        {catImage < 4 ? (
          <button
            onClick={() => {
              if (catImage < 4) {
                setImage(catImage + 1);
              }
            }}
            className="text-5xl"
          >
            <FaArrowCircleRight />
          </button>
        ): null}
      </div>
    </div>
  );
};

export default App;
