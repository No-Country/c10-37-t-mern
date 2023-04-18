import NavBar from "../components/NavBar";
import ToggleSwitch from "../components/ToggleSwitch";
import Options from "../components/Options";
import Gallery from '../components/Gallery';
import styled from "styled-components";
import { useState } from "react";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
  }

  return (
   <>
   <NavBar/>
    <Container>
    <ToggleSwitch checked={toggleState} onClick={handleToggle} />
      <Options />
      {toggleState ? <Gallery /> : null}
    </Container>
  </>
  );
};

export default Home;
