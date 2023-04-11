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
  <Container>
      <ToggleSwitch />
      <Options/>
      <Gallery/>
  </Container>
  );
};

export default Home;
