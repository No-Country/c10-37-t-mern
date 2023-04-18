import NavBar from "../components/NavBar";
import ToggleSwitch from "../components/ToggleSwitch";
import Options from "../components/Options";
import Gallery from '../components/Gallery';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
   <>
   <NavBar/>
  <Container>
      <ToggleSwitch/>
      <Options/>
  </Container>
  <Gallery/>
  </> 
  );
};

export default Home;
