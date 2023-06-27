import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    showClock: false,
  }

  onTrggare = () => {
    this.setState(prevState => {
      const {showClock} = prevState

      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {showClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onTrggare}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <Clock date="27-06-2023" />}
      </div>
    )
  }
}

export default App
