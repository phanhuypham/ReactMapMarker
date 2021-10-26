import React, { useCallback, useMemo, useState } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import carPicture from '../../assets/car.jpeg'
import { useSelector, useDispatch } from 'react-redux'
import { selectPreviousTab } from './saleSlice'


import { Button, Card, CardContent, CardMedia, Grid, Tab } from '@mui/material';
import { TabContext,TabList,TabPanel } from '@mui/lab';
import { Box } from '@mui/system';
import TabContent from './TabContent';
import db from '../../db.json'
const StyledGridContainer = styled(Grid) `
  margin-top: 20px;
  height: auto:
`
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
const CarSale = () => {
  const sale = useSelector((state) => state.sale)
  const dispatch = useDispatch();
  const [tab, setTab] = useState('1')

  const dbOptions = useMemo(() => db.options, [])
  
  const handleChange = (event, newTab) => {
    setTab(newTab);
  };
  const renderTabs = () => {
    return dbOptions.map((option, index) => {
      return <Tab label={option.optionType} value={index} key={index}
        disabled={index !== 0 && !sale.options[index-1]} 
        onClick={() => dispatch(selectPreviousTab(index))}
      />
    })
  }
  const renderTabPanels = useCallback(() => {
    return dbOptions.map((option, index) => {
      const renderingOptionData = index === 0 ? option.data : option.data.filter((item) => (
        sale.options[index - 1] && sale.options[index - 1].nextOptId.includes(item.id) 
      ))
      return (<TabPanel value={index} key={index}>
        <TabContent optionData={renderingOptionData} optionType={option.optionType} optionPos={index}/>
      </TabPanel>)}
    )
  },[sale.options]);

  const renderSelectedOptions = () => {
    return dbOptions.map((option, index) => {
      return sale.options[index] && <li key={index}>{option.optionType}: {sale.options[index].name}</li>
    })
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
          <CardImageContainer>
            <CardMedia
              component="img"
              height="200"
              image={carPicture}
            />
            <SelectedOptions>
              {renderSelectedOptions()}
              <li>Price: {sale.price}$</li>
            </SelectedOptions>
          </CardImageContainer>
          <CardContent>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={tab}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="change tab">
                    {renderTabs()}
                  </TabList>
                </Box>
                {renderTabPanels()}
              </TabContext>
              <Button disabled={sale.options.length !== dbOptions.length} variant="contained" color="success">Submit</Button>
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
