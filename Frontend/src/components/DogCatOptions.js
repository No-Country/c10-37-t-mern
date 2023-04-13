import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styled from 'styled-components';

const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  border-bottom: ${({ selected }) => selected ? '3px solid orange' : 'none'};
  cursor: pointer;
`;

const OptionText = styled.p`
  margin-left: 5px;
  font-size: 14px;
`;

const DogCatOptions = () => {
    const [selectedOption, setSelectedOption] = useState(null);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <>
            <Option selected={selectedOption === 'dogs'} onClick={() => handleOptionClick('dogs')}>
              <FontAwesomeIcon icon={faDog} size="lg" />
              <OptionText>Perros</OptionText>
            </Option>
            <Option selected={selectedOption === 'cats'} onClick={() => handleOptionClick('cats')}>
              <FontAwesomeIcon icon={faCat} size="lg" />
              <OptionText>Gatos</OptionText>
            </Option>
      </>
    );
  };
  
  export default DogCatOptions;
  