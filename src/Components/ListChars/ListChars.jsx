import Char from "../Char/Char";
import "./style.css";
import validator from "validator";
import { useEffect, useState } from "react";
import randomColor from "randomcolor";

const ListChars = ({ sharedWord, noDuplicate, setNoDuplicate }) => {
  let charArray = sharedWord.split("");
  let boolList = [];
  const validate = (char) => {
    let l = validator.contains(sharedWord.toLowerCase(), char.toLowerCase(), {
      minOccurrences: 2,
    });
    boolList.push(l);
    return l;
  };
  useEffect(() => {
    const allEqual = (arr) => arr.every((ele) => ele === false);
    // if all the bools are equal to false and the func returns true
    // we set isthereDuplicate to false because there are no more duplicates
    setNoDuplicate(allEqual(boolList));
  }, [boolList]);

  // bgcolor generator
  // a function that generates random color codes
  function getDarkColor() {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  }
  const [charStateObj, setCharStateObj] = useState({});
  useEffect(() => {
    // I made a lookup dictionary here
    let charObj = {};
    let n = 1;
    charArray.forEach((char) => {
      // convert char to lowercase
      let lowerChar = char.toLowerCase();
      // generate the color
      let color = getDarkColor();
      if (charObj[lowerChar]) {
        charObj[lowerChar][0] += 1;
      } else {
        charObj[lowerChar] = [n];
        charObj[lowerChar].push(color);
      }
    });
    // we check if the object is in local storage
    let get = JSON.parse(localStorage.getItem("charObj"));
    if (get) {
      setCharStateObj(get);
    } else {
      localStorage.setItem("charObj", JSON.stringify(charObj));
      setCharStateObj(charObj);
    }
  }, []);
  return (
    <div className="list-chars">
      {sharedWord &&
        charArray.map((char, index) => (
          <Char
            char={char}
            index={index}
            key={index}
            hasDuplicate={validate(char)}
            // convert char to lowercase to access the hash map
            getColor={charStateObj[char.toLowerCase()]}
          />
        ))}
    </div>
  );
};

export default ListChars;
