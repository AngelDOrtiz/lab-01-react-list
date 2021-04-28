import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PotionList from './PotionList';
import potionData from './potions.js';
import PotionSearch from './PotionSearch';



class App extends Component {

state = {
  potions: potionData
}

  handleSearch = ({ nameFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = potionData
      .filter(potion => {
        return !nameFilter || potion.name.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ potions: searchedData });
  }
  render() {
    const { potions } = this.state;
    return (
      <div className="App">
        <Header/>
        
        <main>
          <PotionList potions={potions}/>
        </main>
        

        <PotionSearch onSearch={this.handleSearch}/>
        <Footer/>
      </div>
    );
  }

}

export default App;
