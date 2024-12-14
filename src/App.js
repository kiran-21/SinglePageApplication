import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Graphs from "./pages/Graphs";
import Home from "./pages/Home";
import ToDo from "./pages/Todo";
import ContactUs from "./pages/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/todo" element={<ToDo />} />
					<Route path="/graphs" element={<Graphs />} />
					<Route path="/contact" element={<ContactUs />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
