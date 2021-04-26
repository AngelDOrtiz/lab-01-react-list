import { Component } from 'react';
import logo from './react-logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PotionList from './PotionList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <main><PotionList/></main>
        

        
        <Footer/>
      </div>
    );
  }

}

export default App;
