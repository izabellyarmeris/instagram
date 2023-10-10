
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Instagrum/LoginForm';
import PaginaInicial from './Instagrum//bodyComponent/Body';




const App = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<LoginForm />} />
					<Route path="/PaginaInicial" element={<PaginaInicial/>} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;