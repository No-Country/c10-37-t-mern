import styled from 'styled-components';
import { useState } from 'react';
import LogoutButton from './LogoutButton';

const ProfileCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #BDBDBD;
  margin-right: 10px;
  position: relative;
  cursor: pointer;
`;

const ProfileMenuWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 100%;
  width: 100px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const NavProfileCircle = () => {
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
    const handleProfileCircleClick = () => {
      setIsProfileMenuOpen(!isProfileMenuOpen);
    };
  
    return (
          <ProfileCircle onClick={handleProfileCircleClick}>
            <div />
            {isProfileMenuOpen && (
              <ProfileMenuWrapper>
                <LogoutButton/>
              </ProfileMenuWrapper>
            )}
          </ProfileCircle>
    );
  };
  
  export default NavProfileCircle;
  