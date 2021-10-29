import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'

interface SaleSubmitType {
  isSubmitActive: boolean
}

const SaleSubmit: React.FC<SaleSubmitType> = ({isSubmitActive}) => {
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

export default SaleSubmit
