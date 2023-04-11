import styled from 'styled-components';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faCat, faSliders } from '@fortawesome/free-solid-svg-icons';

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
`;

const OptionWrapper = styled.div`
  display: flex;
`;

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

const FiltersOption = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${({ selected }) => selected ? '3px solid orange' : 'none'};
  cursor: pointer;
`;

const FiltersOptionText = styled.p`
  margin-left: 5px;
  font-size: 14px;
`;

const FiltersIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: -8px;
  border: none;
  border-top: 1px solid #ccc;
  z-index: -2; 
`;

const Options = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <OptionsContainer>
        <OptionWrapper>
          <Option selected={selectedOption === 'dogs'} onClick={() => handleOptionClick('dogs')}>
            <FontAwesomeIcon icon={faDog} size="lg" />
            <OptionText>Perros</OptionText>
          </Option>
          <Option selected={selectedOption === 'cats'} onClick={() => handleOptionClick('cats')}>
            <FontAwesomeIcon icon={faCat} size="lg" />
            <OptionText>Gatos</OptionText>
          </Option>
        </OptionWrapper>
        <FiltersOption selected={selectedOption === 'filters'} onClick={() => handleOptionClick('filters')}>
          <FiltersOptionText>Filtros</FiltersOptionText>
          <FiltersIcon icon={faSliders} size="lg" />
        </FiltersOption>
        <Line />
      </OptionsContainer>
    </>
  );
};

export default Options;
