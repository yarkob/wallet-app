import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from '../Home';
import About from '../About';
import Layout from '../Layout';
import Statistics from '../Statistics';

import { Wrapper, GlobalStyle } from './styles'
import { open } from '../../utils/indexdb';

class App extends React.Component {
constructor(props) {
  super (props);

  this.state = {
    loading: true
  }
}

  componentDidMount() {
    open().then(() => {
      this.setState({
        loading: false
      })
    }).catch(() => {
      console.error('Помилка')
    });
  }

  render() {
  if (this.state.loading) {
    return <div>Loading...</div>
  }
  return (
    <Router>
      <Wrapper>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="statistics" element={<Statistics/>}/>
          </Route>
        </Routes>
      </Wrapper>
    </Router>
  )
}
}

export default App;
