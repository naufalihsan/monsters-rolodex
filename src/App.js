import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  // [value, setValue]
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setMonsters(users))
  }, [])

  useEffect(() => {
    const filtered = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(filtered);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const value = event.target.value.toLocaleLowerCase();
    setSearchField(value);
  }

  return <div className="App">
    <h1 className='app-title'>
      Monsters Rolodex
    </h1>
    <SearchBox
      className='monsters-search-box'
      placeholder='search monsters'
      onChangeHandler={onSearchChange}
    />
    <CardList monsters={filteredMonsters} />
  </div>
}

export default App;
