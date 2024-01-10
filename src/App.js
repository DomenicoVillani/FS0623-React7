import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Alert, Dropdown } from "react-bootstrap";
import Home from "./components/Home";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

	const [searchString, setSearchString] = useState ('')

	const getNewSearch = (newSearch) => {
		setSearchString(newSearch)
	}

	return (
		<BrowserRouter>
			<div>
				<MyNavbar getNewSearch={getNewSearch}/>
				<Routes>
					<Route path="/" element={<Home searchString={searchString}/> } />
				</Routes>
				<MyFooter />
			</div>
		</BrowserRouter>
	);
};

export default App;