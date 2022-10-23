import React from "react";
import "./style/MiniPlayer.css";

const MiniPlayer = () => {
  return (
    <div className="miniPlayer floatingBtn">
      <span className="material-icons-outlined open"> play_circle_filled </span>
      <span className="material-icons-outlined close"> close </span>
      <img src="./images/3.jpg" alt="" />
      <p>#23 React Hooks Bangle - React useReducer hook Bangle</p>
    </div>
  );
};

export default MiniPlayer;
