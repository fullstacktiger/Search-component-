import React from 'react';
import { render } from 'react-dom';
import './less/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();