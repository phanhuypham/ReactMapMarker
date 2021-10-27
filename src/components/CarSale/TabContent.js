import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import styled from 'styled-components'


const StyledButton = styled(Button) `
  margin: 20px;
  display: flex;
  flex-direction: column;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TabContent = ({optionData, optionType, onSelectOption, selectedOptionId}) => {
  const [currentSelectedId, setCurrentSelectedId] = useState(0);

  const _onSelectOption = (option) => {
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

TabContent.propTypes = {
  optionData: PropTypes.array,
  optionType: PropTypes.string,
  optionPos: PropTypes.number,
  onSelectOption: PropTypes.func,
  selectedOptionId: PropTypes.string
}

export default TabContent
