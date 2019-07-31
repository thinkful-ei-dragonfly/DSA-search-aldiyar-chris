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
    if (start > end) return -1; 
    let index = Math.floor((start + end) / 2);
    let item = array[index];
    console.log(start, end)
    console.log(index);
    

    if (item === value) {
      this.setState({
        result: index
      })
      return;
    }

    else if (item < value) {
      count++
      return this.getResultBinary(array, value, index + 1, end);
    }
    else if (item > value) {
      count++
      return this.getResultBinary(array, value, start, index - 1);
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
          <h3>It took {this.state.result} steps to find {this.state.searchTerm}</h3>
        </div>
      </header>

    </div>
  );
}

}

export default App;