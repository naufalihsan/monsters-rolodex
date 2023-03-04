import { Component } from 'react';

import CardList from './components/card-list/card-list.component';

import './App.css';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { monsters: users }
      },
        () => console.log(this.state.monsters)
      ))
  }

  onSearchChange = event => {
    const searchString = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField: searchString }
    }, () => {
      console.log(this.state.searchField);
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;


    // non modifying methods => generate new (immutability)
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
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
    )
  }

}

export default App;