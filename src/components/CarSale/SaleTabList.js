import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { TabList } from '@mui/lab';
import { Tab } from '@mui/material';

const SaleTabList = props => {

  const renderTabs = () => {
    const {tabNameList, selectedOptions} = props
    return tabNameList.map((tab, index) => {
      return <Tab label={tab} value={index} key={index}
        disabled={index !== 0 && !selectedOptions[index-1]} 
      />
    })
  }

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={props.onTabChange} aria-label="change tab">
        {renderTabs()}
      </TabList>
    </Box>
  )
}

SaleTabList.propTypes = {
  onTabChange: PropTypes.func,
  tabNameList: PropTypes.array,
  activeIndex: PropTypes.number,
  selectedOptions: PropTypes.array
}

export default SaleTabList
