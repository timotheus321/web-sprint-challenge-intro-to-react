import React from "react";
import { CharacterWrapper } from "./Character.styles";

const Character = (props) => {
  return (
    <CharacterWrapper>{props.name}</CharacterWrapper>
  );
};

export default Character;
