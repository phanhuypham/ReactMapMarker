import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { OptionInfo } from '../../interfaces'


const StyledButton = styled(Button) `
  margin: 20px;
  display: flex;
  flex-direction: column;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface TabContentType {
  optionData: OptionInfo[], 
  optionType: string, 
  onSelectOption: (option: OptionInfo, optionType: string) => void, 
  selectedOptionId: string;
}

const TabContent: React.FC<TabContentType> = ({optionData, optionType, onSelectOption, selectedOptionId}) => {
  const [currentSelectedId, setCurrentSelectedId] = useState('');

  const _onSelectOption = (option: OptionInfo) => {
    if(option.id !== currentSelectedId) {
      onSelectOption(option, optionType)
      setCurrentSelectedId(option.id);
    }
  }
  useEffect(() => {
    setCurrentSelectedId(selectedOptionId);
  },[selectedOptionId])
  
  const renderOptions = () => {
    return optionData.map((option) => {
      return (
        <StyledButton 
          key={option.id} 
          variant={option.id === currentSelectedId ? "contained": "outlined"}
          onClick={() => _onSelectOption(option)}>
          {option.name}
          <div>{option.price}$</div>
        </StyledButton>
      )
    })
  }
  return (
    <OptionsContainer>
      {renderOptions()}
    </OptionsContainer>
  )
}

export default TabContent
