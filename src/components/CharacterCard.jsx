import React from "react";
import { Card } from "antd";
function CharacterCard({ character }) {

  return (
    <Card
      key={character.char_id}
      style={{ width: "240px" , margin:"30px"}}
      title=""
      cover={<img src={character.img}  style={{ width: "240px" }} alt={character.name} />}
    >
      <h2>{character.name}</h2>
      <p>{character.birthday}</p>
    </Card>
  );
}

export default CharacterCard;
