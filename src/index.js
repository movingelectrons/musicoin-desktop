import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopy, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
library.add(faCopy, faEllipsisH);

const Index = () => (
    <Store>
        <App />
    </Store>
);

// Render and Inject our compoent tree into the 'root' element
ReactDOM.render(<Index />, document.getElementById('root'));