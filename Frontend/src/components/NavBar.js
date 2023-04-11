import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;
  height: 80px;
  padding: 0 30px;
`;

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

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #BDBDBD;
  border-radius: 20px;
  padding: 8px 10px;
  margin: 0 30px;
  flex-grow: 1;
  max-width: 800px;
`;

const SearchInput = styled.input`
  border: none;
  width: 100%;
  margin-left: 10px;
`;

const HeartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HeartIcon = styled.i`
  color: #FF8C00;
  font-size: 24px;
  margin-right: 10px;
`;

const ProfileCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #BDBDBD;
  margin-right: 10px;
`;

const ProfileArrow = styled.i`
  color: #BDBDBD;
  font-size: 24px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <AdoptText>Adopt<AdoptTitle>ar</AdoptTitle></AdoptText>
      <SearchWrapper>
        <i className="fas fa-search"></i>
        <SearchInput type="text" placeholder="Buscar"/>
      </SearchWrapper>
      <HeartWrapper>
        <HeartIcon className="far fa-heart"></HeartIcon>
        <ProfileCircle>
          <ProfileArrow className="fas fa-chevron-down"></ProfileArrow>
        </ProfileCircle>
      </HeartWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;