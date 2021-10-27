import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import carPicture from '../../assets/car.jpeg'
import { CardMedia } from '@mui/material'

const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`

const SelectedOptions = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 10px;
  color: white;
`

const SaleImage = ({totalPrice, selectedOptions}) => {
  const renderSelectedOptions = () => {
    return selectedOptions.map((option, index) => {
      return option && <li key={index}>{option.optionType}: {option.name}</li>
    })
  }

  return (
    <div>
      <CardImageContainer>
        <CardMedia
          component="img"
          height="200"
          image={carPicture}
        />
        <SelectedOptions>
          {renderSelectedOptions()}
          <li>Price: {totalPrice}$</li>
        </SelectedOptions>
      </CardImageContainer>
    </div>
  )
}

SaleImage.propTypes = {
  selectedOptions: PropTypes.array,
  totalPrice: PropTypes.number
}

export default SaleImage
