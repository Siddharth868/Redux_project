import React,{Component} from 'react';
import logo from './logo.svg';
import Welcome from './components/Welcome'
import Refs_demo from './components/Refs_demo'
import Hero from './components/Hero'
import './App.css';
import Zone from './components/Zone';
import BU1 from './components/BU1';
import HookCounter from './components/HookCounter';
import NameC from './components/NameC';
import Pure_components from './components/Pure_components';
import Ref1 from './components/Ref1';
import Parent from './components/Parent';
import Count from './components/Count';


class App extends Component {

  render() {
    return(
      <div className='App'>
        <Count />
      </div>
    )
  }
}

export default App
