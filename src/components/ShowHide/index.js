import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {clicked: true, First: null, clicked2: true, Last: null}

  OnFirst = () => {
    const {clicked} = this.state
    if (clicked === true) {
      this.setState({First: <p className="para">Joe</p>})
      this.setState({clicked: false})
    } else {
      this.setState({First: null})
      this.setState({clicked: true})
    }
  }

  OnLast = () => {
    const {clicked2} = this.state
    if (clicked2 === true) {
      this.setState({Last: <p className="para">Jonas</p>})
      this.setState({clicked2: false})
    } else {
      this.setState({Last: null})
      this.setState({clicked2: true})
    }
  }

  render() {
    const {First} = this.state
    const {Last} = this.state
    return (
      <div className="cont">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-cont">
          <div className="card">
            <button type="button" className="button" onClick={this.OnFirst}>
              Show/Hide Firstname
            </button>
            {First}
          </div>
          <div className="card">
            <button type="button" className="button" onClick={this.OnLast}>
              Show/Hide Lastname
            </button>
            {Last}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
