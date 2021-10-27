import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const SaleSubmit = ({isSubmitActive}) => {
  const [active, setActive] = useState(isSubmitActive);

  useEffect(() => {
    setActive(isSubmitActive)
  },[isSubmitActive])
  return (
    <div>
      <Button 
        disabled={!active} 
        variant="contained" 
        color="success">
          Submit
      </Button>
    </div>
  )
}

SaleSubmit.propTypes = {
  isSubmitActive: PropTypes.bool
}

export default SaleSubmit
