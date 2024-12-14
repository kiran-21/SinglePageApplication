/******************************************************************************************
 * Project: Trends in Web Technology - Group Project
 * File: App.js
 * Author: Kiran Saraswathy Bhavanam Radhakrishnan
 * Modified by: Pablo Maldonado
 ******************************************************************************************/

import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Graphs from "./pages/Graphs";
import Home from "./pages/Home";
import ToDo from "./pages/Todo";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	const [tasks, setTasks] = useState(() => {
		const savedTasks = localStorage.getItem("tasks");
		return savedTasks ? JSON.parse(savedTasks) : [];
	});

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/todo" element={<ToDo tasks={tasks} setTasks={setTasks} />} />
					<Route path="/graphs" element={<Graphs tasks={tasks} />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
