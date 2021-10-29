import React, { useEffect, useMemo, useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DBOption, OptionInfo } from '../../interfaces';


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


const CarSale: React.FC = () => {
  const dbOptions = useMemo<DBOption[]>(() => db.options, [])
  const tabNameList = useMemo(() => db.options.map((option) => option.optionType),[]);
  const [tab, setTab] = useState('0')
  const [selectedOptions, setSelectedOptions] = useState(Array(dbOptions.length).fill(null))
  const [isSubmitActive, setIsSubmitActive] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(()=> {
    setIsSubmitActive(selectedOptions.every((option) => option))
    setTotalPrice(selectedOptions.reduce((prev, curr) => {      
      return curr ? prev + curr.price : prev} , 0))
  },[selectedOptions])

  const onTabChange = (event: React.SyntheticEvent<Element, Event>, newTab: string) => {
    setTab(newTab);
  };
  
  const checkOptionTypePos = (arr: DBOption[], optionType: string) => {
    return arr.findIndex(element => {
      return element.optionType === optionType
    });
  }

  const onSelectOption = (option: OptionInfo, optionType: string) => {
    const optionTypePos = checkOptionTypePos(dbOptions, optionType)
    const newOptions = [...selectedOptions];
    for(let optionIdx= optionTypePos + 1; optionIdx<newOptions.length; optionIdx++) {
      newOptions[optionIdx] = null
    }
  
    if(optionTypePos >= 0) {
      newOptions[optionTypePos] = {...option, optionType};
    }
    setSelectedOptions(newOptions);    
   
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

export default CarSale
