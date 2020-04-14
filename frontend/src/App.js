import React, {Component} from 'react';
import {render} from 'react-dom';
import {constants} from './constants';

const ROOT_URL = constants.ROOT_URL;
const DEBUG = constants.DEBUG;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: "Anthony DiFalco",
      location: {
        street: "1142 W Wolfram St",
        city: "Chicago",
        state: "Illinois",
      },
      data: {
        // TO_DO : Figure Out Other User Data
      }
    }
  }

  prepareURL(params=null){
    if (params!==null){
      // TO-DO: concatenate params & create new URL
    }else{
      return new URL(ROOT_URL);
    }
  }

  componentDidMount(){
    fetch(`${ROOT_URL}`).then((res)=>{
      if (DEBUG) console.log(res);
      this.setState({...this.state,location:JSON.parse(res)});
    }).catch((err)=>{
      if (DEBUG) alert(err);
    });
  }

  render(){
    return (
      <div>
        {this.state.location.state}
      </div>
    );
  }
}

export default App;
