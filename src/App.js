import './App.css';
import React, { useState } from 'react';
import Container from './components/Container';

export const SearchContext = React.createContext(null);

function App() {
  const [search, setSearch] = useState({
    labels: ['repair', 'showroom', 'service'],
    name: '',
  });
  return (
    <SearchContext.Provider value={{search, setSearch}}>
      <Container />
    </SearchContext.Provider>
  );
}

export default App;
