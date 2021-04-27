import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PotionList from './PotionList';
import potions from './potions.js';
import PotionSearch from './PotionSearch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        
        <main>
          <PotionList potions={potions}/>
        </main>
        

        <PotionSearch></PotionSearch>
        <Footer/>
      </div>
    );
  }

}

export default App;
