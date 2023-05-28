import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "../../Components/Error/Error";
import ListChars from "../../Components/ListChars/ListChars";
import { WordContext } from "../../Utils/WordContext";
import "./style.css";
import { motion } from "framer-motion";
import Popup from "../../Components/Popup/Popup";

const fixrVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  final: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delayChildren: 1.2,
    },
  },
  exit: {
    opacity: 0,
    x: "100vw",
    transition: {
      duration: 1,
    },
  },
};

const Fixr = () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  const [error, setError] = useState();
  // use context
  const [sharedWord, setSharedWord] = useContext(WordContext);

  // are there still duplicates? default -> true
  const [noDuplicate, setNoDuplicate] = useState(false);

  const [duplicate, setDuplicate] = useState();
  useEffect(() => {
    if (sharedWord) {
      setDuplicate(sharedWord);
    } else {
      const storedWord = localStorage.getItem("word");
      const duplicateWord = localStorage.getItem("duplicateWord");
      if (storedWord) {
        setSharedWord(storedWord);
        setDuplicate(duplicateWord);
      } else {
        setError("No input found");
      }
    }
    //
  }, []);
  const handleClick = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <motion.div
      className="fixr"
      variants={fixrVariants}
      initial="initial"
      animate="final"
      exit="exit"
    >
      <div className="fix">
        {sharedWord && (
          <>
            <div className="btn">
              <button type="submit" onClick={handleClick}>
                <i className="fa-solid fa-angle-left"></i>
                <p>Go Back</p>
              </button>
            </div>
            <div className="popup">
              {noDuplicate && <Popup noDuplicate={noDuplicate} />}
            </div>
          </>
        )}
        {sharedWord && (
          <div className="inner-fixr">
            <p className="word">Your word is: </p>
            <h2 className="">{duplicate}</h2>
            <span className="caution">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5H13.66M9.5 12.5H14.5"
                  stroke="#043F84"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Clicking on Delete removes all duplicates</p>
            </span>
            <div className="char-comp">
              <ListChars
                sharedWord={sharedWord}
                noDuplicate={noDuplicate}
                setNoDuplicate={setNoDuplicate}
              />
            </div>
            <div className="new-word">
              <p className="word">Your new word is: </p>
              <h2>{sharedWord}</h2>
            </div>
          </div>
        )}
        {error && <Error msg={error} />}
      </div>
    </motion.div>
  );
};

export default Fixr;
