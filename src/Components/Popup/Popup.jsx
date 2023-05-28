import "./style.css";
import { motion } from "framer-motion";
import { useState } from "react";

const popupVariants ={
    initial : {
        opacity : 0,
    },
    final :{
        opacity : 1,
        transition : {
            duration  :1,
        }
    },
    disappearAfter :{
        opacity : 0,
        transition : {
            duration  :0.8,
        }
    }
}
const lineVariants ={
    initial : {
        width : '100%',
    },
    final : {
        width : 0,
        transition : {
            delay : 1,
            duration  : 6,
        }
    }
}

const Popup = ({noDuplicate}) => {
    // popup disappear function
    const [disappear, setDisappear] = useState(false);
    if(noDuplicate){
        setTimeout(() => {
            setDisappear(true);
        }, 6500);
    }
  return (
    <motion.div className="popup-msg"
    variants={popupVariants}
    initial = "initial"
    animate = {disappear ? 'disappearAfter' : "final"}
    >
      <div className="for-msg">
        <p>You have successfully filtered all the duplicates</p>
      </div>
      <div className="line">
        <motion.div className="inner-line"
        variants={lineVariants}
        initial = "initial"
        animate = "final"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Popup;
