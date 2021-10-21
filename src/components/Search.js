import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { SearchContext } from '../App'

const SearchItem = styled.div`
  padding: 15px 0;
  width: 100%;
  display:flex;
`

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
`

const Button = styled.button`
  padding: 10px;
  text-align: center;
  margin: auto;
  border: none;
  background: grey;
  color: white;
  border-radius: 20px;
  width: 100%;
  cursor: pointer;
`

const SearchSubmit = styled(Button)`
  width: 200px;
`
function Search(props) {
  const {search, setSearch} = useContext(
    SearchContext
  );

  const [name, setName] = useState(search.name);
  const [labels, setLabels] = useState(search.labels);


  const submit = (e) => {
    e.preventDefault();
    const submitedName = name.trim().toLowerCase();
    setSearch({name: submitedName, labels});
  }

  const handleChangeLabel = (label) => {
    const labelIndex = labels.indexOf(label);
    if (labelIndex > -1) {
      const newLabels = labels
      newLabels.splice(labelIndex, 1);
      setLabels(newLabels);
    } else {
      setLabels([...labels, label]);
    }
  }
  return (
    <div>
      <SearchItem>
        <Button onClick={props.showCurrentLocation}>
          <FontAwesomeIcon icon={faMapMarkerAlt} />          
          <span> Search from your location</span>
        </Button>
      </SearchItem>
      <form>
        <SearchItem>
          <SearchInput type="text" 
            placeholder="Search by supplier name" 
            onChange={e => setName(e.target.value)}/>
        </SearchItem>
        <SearchItem>
          <input 
            type="checkbox"
            defaultChecked={true}
            onChange={() => handleChangeLabel('showroom')}/>
          <label>showroom</label>
        </SearchItem>
        <SearchItem>
          <input 
            type="checkbox" 
            defaultChecked={true}
            onChange={() => handleChangeLabel('service')}/>
          <label >service center</label>
        </SearchItem>
        <SearchItem>
          <input 
            type="checkbox" 
            defaultChecked={true}
            onChange={() => handleChangeLabel('repair')}/>
          <label >Paint and body repair service center</label>
        </SearchItem>
        <SearchItem>
          <SearchSubmit onClick={submit}>Search</SearchSubmit>
        </SearchItem>
      </form>
    </div>
  )
}
Search.propTypes = {
  showCurrentLocation: PropTypes.func
}

export default Search
