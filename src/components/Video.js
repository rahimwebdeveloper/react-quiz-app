import { Link } from "react-router-dom";
import images from "../assets/3.jpg";
import './style/Video.css' ;

const Video = () => {
  return (
    <Link to="/quiz">
      <div className="video">
        <img src={images} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className="qmeta">
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
