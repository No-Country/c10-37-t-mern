import styled from 'styled-components';
import NavAdoptarLogo from './NavAdoptarLogo';
import NavSearchInput from './NavSearchInput';
import NavHeartIcon from './NavHeartIcon';
import NavProfileCircle from './NavProfileCircle';

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  height: 80px;
  padding: 0 30px;
`;

const HeartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {

  return (
    <NavbarWrapper>
      <NavAdoptarLogo/>
      <NavSearchInput/>
      <HeartWrapper>
        <NavHeartIcon/>
        <NavProfileCircle/>
      </HeartWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
