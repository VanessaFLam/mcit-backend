import './App.css';
import React from "react"
import SearchMovies from "./SearchMovies"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1> Movie Searching App</h1>
        <SearchMovies />
      </div>
    )
  }
}

export default App;