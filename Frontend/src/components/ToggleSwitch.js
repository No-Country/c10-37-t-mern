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
  border: 2px solid ${({ on, violet, orange }) => {
    if (violet && on) return '#8B00FF'; 
    if (orange && !on) return '#FF8C00'; 
    return '#C4C4C4'; 
  }};
`;


const SwitchText = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${({ on }) => on ? 'black' : 'white'};
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
  background-color: ${({ on, violet, orange }) => {
    if (violet && on) return '#8B00FF'; 
    if (orange && !on) return '#FF8C00';
    return 'white';
  }};
  position: absolute;
  top: 0;
  left: ${({ on }) => on ? 'calc(100% - 140px)' : '0'};
  transition: all 0.3s;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ on }) => on ? 'flex-end' : 'flex-start'};
  padding: 0 10px;
  box-sizing: border-box;
`;


const ToggleSwitch = () => {
  const [on, setOn] = useState(false);

  const handleClick = () => {
    setOn(!on);
  };

  return (
    <SwitchContainer on={on} violet={on} orange={!on} onClick={handleClick}>
      <SwitchText on={on}>Adoptar</SwitchText>
      <SwitchCircle on={on} violet={on} orange={!on} />
      <SwitchText on={!on}>Dar en adopción</SwitchText>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
