import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Character from "./components/Character/Character";
//import data from "./mocks/handlers"
const App = () => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(res => {
      console.log(res);
      setCharacters(res.data)
  })
    .catch(err => console.error(err))
    }, [])
    

  return (
    <StyledApp>
      <StyledHeader>Characters</StyledHeader>
      {characters.map((props) => (
        <Character key={props.name} name={props.name} />
      ))}
    </StyledApp>
  );
};

const StyledApp = styled.div`
  text-align: center;
`;

const StyledHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
`;

export default App;