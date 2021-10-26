import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { selectOption } from './saleSlice'

const StyledButton = styled(Button) `
  margin: 20px;
  display: flex;
  flex-direction: column;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TabContent = ({optionData, optionType, optionPos}) => {
  const dispatch = useDispatch()
  const currentOption = useSelector((state) => state.sale.options[optionPos])
  const [selectedId, setSelectedId] = useState(!currentOption ? 0 : currentOption.id);

  const onSelectOption = (option) => {
    if(option.id !== selectedId) {
      dispatch(selectOption({option, optionType}));
      setSelectedId(option.id);
    }
  }
  const renderOptions = () => {
    return optionData.map((option) => {
      return (
        <StyledButton 
          key={option.id} 
          variant={option.id === selectedId ? "contained": "outlined"}
          onClick={() => onSelectOption(option)}>
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
  optionPos: PropTypes.number
}

export default TabContent
