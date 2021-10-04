import React from "react";
import Video from "../../img/Jupiter.mp4";

function VideoPage() {
  return (
    <div>
      <video autoPlay loop muted className="bg--video">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPage;
