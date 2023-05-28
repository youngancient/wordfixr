import { useContext } from "react";
import { WordContext } from "../../Utils/WordContext";
import "./style.css";
import { motion } from "framer-motion";
import randomColor from "randomcolor";

const charVariants = {
  initial: {
    scale: 0.8,
  },
  final: {
    scale: 1,
    transition: {
      delay: 0.5,
      duration : 1.5,
    }
  },
};

const Char = ({ char, index, hasDuplicate, getColor}) => {
  const [sharedWord, setSharedWord] = useContext(WordContext);
  // const show =()=> console.log(getColor);

  // function handling click
  const handleClick = () => {
    let charArray = sharedWord.split("");
    if (hasDuplicate) {
      let filter = charArray.filter((aChar, i) => {
        if (aChar.toLowerCase() === char.toLowerCase()) {
          if (index === i) {
            return aChar;
          }
        } else {
          return aChar;
        }
      });
      filter = filter.join("");
      setSharedWord(filter);
      localStorage.setItem("word", filter);
    }
  };
  return (
    <motion.div
      className="char-cont"
      variants={charVariants}
      initial="initial"
      whileInView="final"
      viewport={{once: true}}
    >
      <div className="char" style={getColor ? {background : `${getColor[1]}`} : {background : `#000`}}>
        <p>{char}</p>
      </div>
      <div className="del"

      >
        {hasDuplicate ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <path
              d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5H13.66M9.5 12.5H14.5"
              stroke="#043F84"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <path
              d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5H13.66M9.5 12.5H14.5"
              stroke="#020C18"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </motion.div>
  );
};

export default Char;
