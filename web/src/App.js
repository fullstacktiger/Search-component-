import React, { Component } from 'react';
import { UIRouter, UIView, pushStateLocationPlugin } from '@uirouter/react';

import { Login, Menu } from './components';
import Home from './components/home'
const states = [
  {
    url: '/',
    name: 'home',
    component: Home,
  },
  {
    url: '/about',
    name: 'about',
    component: Login,
  },
];

class App extends Component {


  render() {
   // console.log('state', this.state);
    return (
      <UIRouter plugins={[pushStateLocationPlugin]} states={states}>
        <div>
          <Menu />
          <UIView
            render={(RoutedComponent, props) => (
              <RoutedComponent {...props} />
            )}
          />
        </div>
      </UIRouter>


    );
  }
}

export default App;
