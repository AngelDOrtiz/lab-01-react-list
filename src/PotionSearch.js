import React, { Component } from 'react';
import './PotionSearch.css';

class PotionSearch extends Component {
    state = {
      nameFilter: '',
      sortField: '',
    }

    handleNameFilter = ({ target }) => {
      this.setState({ nameFilter: target.value });
    }
    
    handleSortField = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state);
      console.log(this.state);
    }
    
    render() {
      const { nameFilter, sortField } = this.state;
        

      return (
        <form className="PotionSearch">
        
          <input type="text" name="nameFilter" value={nameFilter} onChange={this.handleNameFilter}></input>
          <select name="sortField" value={sortField} onChange={this.handleSortField}>
            <option value="all">All</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        
          <button>Search</button>
      
        </form>
      );
    }
}

export default PotionSearch;