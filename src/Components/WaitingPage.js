import Lottie from "lottie-react";
import searchingAnimation from "../assets/animations/searching-animation.json"
import TagLines from "./TagLines";
import "./WaitingPage.css"
function WaitingPage() {
  return (
    <div className="waitingpage">
        <h2 className="waitingpage__message">Finding your perfect mismatch...</h2>
        <TagLines />
        <div className="waitingpage__animation">
          <Lottie animationData={searchingAnimation} loop={true} />
        </div>
    </div>
  )
}

export default WaitingPage