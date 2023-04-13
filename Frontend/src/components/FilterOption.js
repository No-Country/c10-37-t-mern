import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import styled from 'styled-components';

const FiltersOption = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${({ selected }) => (selected ? '3px solid orange' : 'none')};
  cursor: pointer;
`;

const FiltersOptionText = styled.p`
  margin-left: 5px;
  font-size: 14px;
`;

const FiltersIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  position: relative;
  width: 400px;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const AgeRangeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const AgeRangeLabel = styled.span`
  font-size: 14px;
`;

const AgeRange = styled.input`
  width: 100%;
  appearance: none;

  ::-webkit-slider-runnable-track {
    height: 5px;
    background: #ddd;
    border-radius: 2.5px;
  }

  ::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    background: orange;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -5px;
  }
`;

const FilterOption = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <>
        <FiltersOption
          selected={selectedOption === 'filters'}
          onClick={() => handleOptionClick('filters')}
        >
          <FiltersOptionText>Filtros</FiltersOptionText>
          <FiltersIcon icon={faSliders} size="lg" />
        </FiltersOption>
        <Modal isOpen={isModalOpen}>
          <ModalContent>
            <ModalTitle>Filtros</ModalTitle>
            <CloseButton onClick={handleCloseModal}>
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </CloseButton>
            <h3>Edad</h3>
            <AgeRangeContainer>
              <AgeRangeLabel>0</AgeRangeLabel>
              <AgeRange
                type="range"
                min="0"
                max="15"
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
              />
              <AgeRangeLabel>{selectedValue}</AgeRangeLabel>
            </AgeRangeContainer>
          </ModalContent>
        </Modal>
      </>
    );
  };

export default FilterOption;
