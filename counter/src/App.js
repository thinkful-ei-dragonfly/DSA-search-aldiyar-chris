import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    array: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
    searchTerm: 0,
    result: null,
  }


  setSearch = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  getResultLinear = (e) => {
    e.preventDefault();
    for (let i = 0; i < this.state.array.length; i++) {
      if (this.state.array[i] == this.state.searchTerm) {
        this.setState({
          result: i + 1
        })
        console.log(this.state.result)
        return;
      }
    }
    
    return -1;
  };

  getResultBinary = (array, value, start = 0, end = array.length - 1, count = 0) => {
    let sorted = array.sort();
    if (start > end) {
      this.setState({
        result: 'The number you looked for is not in the dataset'
      })
      return -1;
    };
    //find the midpoint and the item at the midpoint
    let index = Math.floor((start + end) / 2);
    let item = sorted[index];
    console.log(sorted);
    this.setState({
      result: count+1
    })
    
    //if the middle element is the target them return that location
    if (item === value) {
      console.log('this is last step')
        return index;
    }
    //if the middle element is less than the target then the target lies 
    //on the right side so eliminate all left side and only 
    //consider after the middle to the end of the array
    else if (item < value) {
        return this.getResultBinary(sorted, value, index + 1, end, count+1);
    }
    //if the middle element is greater than the target then the 
    //target is on the left side so the left of the middle 
    else if (item > value) {
        return this.getResultBinary(sorted, value, start, index - 1, count+1);
    }
  }

  renderResults = () => {
    if (typeof this.state.result === 'number') {
      return (
        <>
        <h3>It took {this.state.result} steps to find {this.state.searchTerm}</h3>
        </>
      )
    }
    else {
      return (
        <>
        <h3>{this.state.result}</h3>
        </>
      )
    }
  }


  render() {
    const array = this.state.array
    const searchTerm = this.state.searchTerm
  return (
    <div className="App" >
      <header className = "App-header">
        <h1> Counter </h1>
        <input
          type='text'
          onChange={e => this.setSearch(e)}>
        
        </input>
        <div className = 'controls' >
          <button onClick={e => this.getResultLinear(e)} > Search Linear </button> 
          <button onClick={e => this.getResultBinary(array, searchTerm)} > Search Binary </button>
        </div> 
        <div className='result'>
          {this.renderResults()}
        </div>
      </header>

    </div>
  );
}

}

export default App;