import "./style/Video.css";

const Video = ({ title, noq, id }) => {
  return (
    <div className="video">
      <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="" />
      <p>{title}</p>
      <div className="qmeta">
        <p>{noq} Questions</p>
        <p>Score : {noq * 5}</p>
      </div>
    </div>  
  );
};

export default Video;
