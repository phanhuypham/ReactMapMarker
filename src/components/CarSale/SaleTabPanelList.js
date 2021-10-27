import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { TabPanel } from '@mui/lab'
import TabContent from './TabContent'

const SaleTabPanelList = props => {
  const [selectedOptionList, setSelectedOptionList] = useState(props.selectedOptions)
  useEffect(() => {
    setSelectedOptionList(props.selectedOptions)
  }, [JSON.stringify(props.selectedOptions)])

  const renderTabPanels = () => {
    const {optionList, onSelectOption} = props
    return optionList.map((option, index) => {
      const renderingOptionData =  index === 0 ? option.data : option.data.filter((item) => (
        selectedOptionList[index - 1] && selectedOptionList[index - 1].nextOptId.includes(item.id) 
      ))
      return (<TabPanel value={index} key={index}>
        <TabContent 
          optionData={renderingOptionData} 
          optionType={option.optionType} 
          onSelectOption={onSelectOption}
          selectedOptionId={selectedOptionList[index] ? selectedOptionList[index].id : ''}/>
      </TabPanel>)}
    )
  }

  return (
    <div>
      {renderTabPanels()}
    </div>
  )
}

SaleTabPanelList.propTypes = {
  optionList: PropTypes.array,
  onSelectOption: PropTypes.func,
  selectedOptions: PropTypes.array
}

export default SaleTabPanelList
