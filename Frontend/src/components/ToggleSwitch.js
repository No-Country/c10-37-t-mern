import React, { useState } from 'react';
import styled from 'styled-components';

const SwitchContainer = styled.div`
  display: inline-flex;
  height: 40px;
  width: 280px;
  border-radius: 16px;
  background-color: white;
  position: relative;
  cursor: pointer;
  border: 2px solid ${({ checked, violet, orange }) => {
    if (violet && checked) return '#8B00FF'; 
    if (orange && !checked) return '#FF8C00'; 
    return '#C4C4C4'; 
  }};
`;

const SwitchText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ checked }) => checked ? 'black' : 'white'};
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
`;

const SwitchCircle = styled.div`
  height: 40px;
  width: 140px;
  border-radius: 16px;
  background-color: ${({ checked, violet, orange }) => {
    if (violet && checked) return '#8B00FF'; 
    if (orange && !checked) return '#FF8C00';
    return 'white';
  }};
  position: absolute;
  top: 0;
  left: ${({ checked }) => checked ? 'calc(100% - 140px)' : '0'};
  transition: all 0.3s;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ checked }) => checked ? 'flex-end' : 'flex-start'};
  padding: 0 10px;
  box-sizing: border-box;
`;

const ToggleSwitch = ({ checked, onClick }) => {
  const [isActive, setIsActive] = useState(checked);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <SwitchContainer checked={isActive} violet={isActive} orange={!isActive} onClick={handleClick}>
      <SwitchText checked={isActive}>Adoptar</SwitchText>
      <SwitchCircle checked={isActive} violet={isActive} orange={!isActive} />
      <SwitchText checked={!isActive}>Dar en adopción</SwitchText>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
