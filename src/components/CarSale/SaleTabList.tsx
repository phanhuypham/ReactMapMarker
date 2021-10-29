import React from 'react'
import { Box } from '@mui/system'
import { TabList } from '@mui/lab';
import { Tab } from '@mui/material';
import { Option } from '../../interfaces';

interface SaleTabListType {
  onTabChange: ((event: React.SyntheticEvent<Element, Event>, value: string) => void),
  tabNameList: string[],
  selectedOptions: Option[]
}

const SaleTabList: React.FC<SaleTabListType> = (props) => {
  const renderTabs = () => {
    const {tabNameList, selectedOptions} = props
    return tabNameList.map((tab, index) => {
      return <Tab label={tab} value={index.toString()} key={index}
        disabled={index !== 0 && selectedOptions[index-1] === null}
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

export default SaleTabList
