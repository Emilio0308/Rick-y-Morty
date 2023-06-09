import React from "react";
import "./CharacterCard.css"

const CharacterCard = ({ img , hoverimg , name}) => {
  return (
    <div className="card">
      <h4 className="characterName">{name}</h4>
      <div className="imgCard">
        <img className="img3d" src={hoverimg} alt={`${name} img`} download="lazy"/>
        <img className="normalImg" src={img} alt={`${name} img`}  download="lazy"/>
      </div>
    </div>
  );
};

export default CharacterCard;
