import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AdoptText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #8B00FF;
  display: flex;
  align-items: center;
`;

const AdoptTitle = styled.span`
  color: #FF8C00;
`;

const NavAdoptarLogo = () => {
    return (
        <Link to={"/home"} style={{ textDecoration: 'none' }}><AdoptText>Adopt<AdoptTitle>ar</AdoptTitle></AdoptText></Link>
    );
  };
  
  export default NavAdoptarLogo;