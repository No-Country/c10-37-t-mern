import styled from 'styled-components';

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
  outline: none;
  width: 100%;
  margin-left: 10px;
`;

const NavSearchInput = () => {
    return (
        <SearchWrapper>
          <i className="fas fa-search"></i>
          <SearchInput type="text" placeholder="Buscar"/>
        </SearchWrapper>
    );
  };
  
  export default NavSearchInput;