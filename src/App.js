import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home'
import Details from './components/Details'
import './App.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Route path='/' component={Home} />
          <Route path='/details' component={Details} />
        </Router>
      </Provider>
    </>
  );
}

export default App;
