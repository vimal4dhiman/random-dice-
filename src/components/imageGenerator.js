import dice1 from "../images/dice-1.png";
import dice2 from "../images/dice-2.png";
import dice3 from "../images/dice-3.png";
import dice4 from "../images/dice-4.png";
import dice5 from "../images/dice-5.png";
import dice6 from "../images/dice-6.png";

import "../App.css";

const ImageGenerate = (props) => {
  if (props.value === 1) {
    return <img src={dice1} className="dice" alt="Playing dice" />;
  }
  if (props.value === 2) {
    return <img src={dice2} className="dice" alt="Playing dice" />;
  }
  if (props.value === 3) {
    return <img src={dice3} className="dice" alt="Playing dice" />;
  }
  if (props.value === 4) {
    return <img src={dice4} className="dice" alt="Playing dice" />;
  }
  if (props.value === 5) {
    return <img src={dice5} className="dice" alt="Playing dice" />;
  }
  if (props.value === 6) {
    return <img src={dice6} className="dice" alt="Playing dice" />;
  }
};

export default ImageGenerate;
