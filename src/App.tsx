import React from "react";
import "./App.css";
import CategorySelector from "./components/categoySelector/CategorySelector";
import PageTitle from "./components/pageTitle/PageTitle";
function App() {
	return (
		<div className="grid place-items-center items-center">
			<PageTitle />
			<CategorySelector />
		</div>
	);
}

export default App;
