import React, { useEffect, useMemo, useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'


import {  Card, CardContent, Grid } from '@mui/material';
import { TabContext} from '@mui/lab';
import { Box } from '@mui/system';
import db from '../../db.json'
import SaleImage from './SaleImage'
import SaleTabList from './SaleTabList';
import SaleTabPanelList from './SaleTabPanelList';
import SaleSubmit from './SaleSubmit';
const StyledGridContainer = styled(Grid) `
  margin-top: 20px;
  height: auto:
`


const CarSale = () => {
  const dbOptions = useMemo(() => db.options, [])
  const tabNameList = useMemo(() => db.options.map((option) => option.optionType));
  const [tab, setTab] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState(Array(dbOptions.length).fill(null))
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=> {
    setIsSubmitActive(selectedOptions.every((option) => option))
  },[JSON.stringify(selectedOptions)])

  const onTabChange = (event, newTab) => {
    setTab(newTab);
  };
  
  const checkOptionTypePos = (arr, optionType) => {
    return arr.findIndex(element => {
      return element.optionType === optionType
    });
  }

  const onSelectOption = (option, optionType) => {
    const optionTypePos = checkOptionTypePos(dbOptions, optionType)
    const newOptions = selectedOptions;
    for(let i= optionTypePos + 1;i<newOptions.length;i++) {
      newOptions[i] = null
    }
    if(optionTypePos >= 0) {
      newOptions[optionTypePos] = {...option, optionType};
    }
    setSelectedOptions(newOptions);
    setTotalPrice(selectedOptions.reduce((prev, curr) => {
      return curr ? prev + curr.price : prev} , 0))
  }
  return (
    <div>
      <StyledGridContainer
        container
        spacing={0}
        direction="column"
        alignItems="center"
      >
        <Card sx={{ maxWidth: 500}}>
          <SaleImage selectedOptions={selectedOptions} totalPrice={totalPrice}/>
          <CardContent>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={tab}>
                <SaleTabList 
                  onTabChange={onTabChange} 
                  tabNameList={tabNameList} 
                  selectedOptions={selectedOptions}/>
                <SaleTabPanelList 
                  onSelectOption={onSelectOption} 
                  optionList={dbOptions} 
                  selectedOptions={selectedOptions}/>
              </TabContext>
              <SaleSubmit isSubmitActive={isSubmitActive}/>
            </Box>
          </CardContent>
        </Card>
      </StyledGridContainer> 
    </div>
  )
}

// CarSale.propTypes = {

// }

export default CarSale
