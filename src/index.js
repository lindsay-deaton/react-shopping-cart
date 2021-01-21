import React, { useState, createContext } from 'react';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './sass/index.scss';
import App from './App';


const CartContext = createContext();
const AppWithRouter = withRouter(App);

ReactDOM.render(
	<CartContext.Provider>
		<Router>
		<AppWithRouter />
		</Router>
	</CartContext.Provider>,
	document.getElementById('root')
);
