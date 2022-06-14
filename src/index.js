import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// React 17 (old way)
// ReactDOM.render(<App />, document.getElementById('root'));

// React 18
// const container = document.getElementById('root');
// const root = createRoot(container);
//root.render(<App tab="home" />);

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
