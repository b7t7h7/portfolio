import React from "react";
import myFace from "../../assets/Ben_head.jpg";

function Face() {
    return(
        <div className="image">
            <img src={myFace} alt="My face" className="img-thumbnail" />
        </div>
    );
}

export default Face;


