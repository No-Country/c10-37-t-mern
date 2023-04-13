import styled from 'styled-components';
import DogCatOptions from './DogCatOptions';
import FilterOption from './FilterOption';

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
  return (
    <>
      <OptionsContainer>
        <OptionWrapper>
         <DogCatOptions/>
        </OptionWrapper>
        <FilterOption/>
        <Line />
      </OptionsContainer>
    </>
  );
};

export default Options;
