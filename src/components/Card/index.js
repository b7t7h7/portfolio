import React from "react";

function Card(props) {
    return(
        <div className="col-md-6 col-sm-12 col-xs-12 portfolio-card">
            <div className="card-header glowBox">
            {props.cardData.projectTitle}
        </div>
            <div className="card-body glowBox">
              <img src={props.cardData.projectImage} className="card-img-top" alt={props.cardData.alt}/>
            </div>
            <div className="card-footer glowBox">
              <a className="card-text" href={props.cardData.deployedLink}>Deployed App</a>
              <a className="card-text" href={props.cardData.githubLink}>GitHub Repo</a>
            </div>
        </div>
    );
}

export default Card;