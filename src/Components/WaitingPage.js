import Lottie from "lottie-react";
import searchingAnimation from "../assets/animations/searching-animation.json"
import TagLines from "./TagLines";
function WaitingPage() {
  return (
    
    <div>
        <h2>Finding Your Perfect Mis-match</h2>
        <TagLines />
        <Lottie animationData={searchingAnimation} loop={true} />
    </div>
  )
}

export default WaitingPage