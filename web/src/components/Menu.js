import React from 'react';
import { UISref } from '@uirouter/react';

export const Menu = () => (
  <nav id="global-nav" className="nav">
    <div className="container">
      <div className="pull-left">
       
      </div>
      <div className="pull-right">
        <ul className="nav-list">
          <li>Browse All</li>
          <li>Locations</li>
          <UISref to="home">
            <li>Home</li>
          </UISref>
          <UISref to="about">
            <li>Login</li>
          </UISref>

        </ul>
      </div>
    </div>
  </nav>
);


