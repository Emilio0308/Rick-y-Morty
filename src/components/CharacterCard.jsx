import React from "react";
import "./CharacterCard.css"

const CharacterCard = ({ img , hoverimg }) => {
  return (
    <div className="card">
      <h4 className="characterName">Rick Sanchez</h4>
      <div className="imgCard">
        <img className="img3d" src={hoverimg} alt="" />
        <img className="normalImg" src={img} alt="" />
      </div>
    </div>
  );
};

export default CharacterCard;
