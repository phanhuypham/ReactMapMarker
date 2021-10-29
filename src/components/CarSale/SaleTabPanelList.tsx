import React, { useEffect, useState } from 'react'
import { TabPanel } from '@mui/lab'
import TabContent from './TabContent'
import { DBOption, Option, OptionInfo } from '../../interfaces'

interface SaleTabPanelListType {
  optionList: DBOption[],
  onSelectOption: (option: OptionInfo, optionType: string) => void,
  selectedOptions: Option[]
}

const SaleTabPanelList: React.FC<SaleTabPanelListType> = (props) => {
  const [selectedOptionList, setSelectedOptionList] = useState(props.selectedOptions)
  useEffect(() => {
    setSelectedOptionList(props.selectedOptions)
  }, [props.selectedOptions])

  const renderTabPanels = () => {
    const {optionList, onSelectOption} = props
    return optionList.map((option, index) => {
      const renderingOptionData =  index === 0 ? option.data : option.data.filter((item) => (
        selectedOptionList[index - 1] && selectedOptionList[index - 1].nextOptId.includes(item.id) 
      ))
      return (<TabPanel value={index.toString()} key={index}>
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

export default SaleTabPanelList
