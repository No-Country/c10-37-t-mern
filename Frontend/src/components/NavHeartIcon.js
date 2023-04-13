import styled from 'styled-components';

const HeartIcon = styled.i`
  color: #FF8C00;
  font-size: 24px;
  margin-right: 10px;
`;

const NavHeartIcon = () => {
    return (
          <HeartIcon className="far fa-heart"></HeartIcon>   
    );
  };
  
  export default NavHeartIcon;