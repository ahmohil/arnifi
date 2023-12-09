import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chatbot from "./components/Chatbot";

function App() {
	return (
		<div className="mx-2">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/arnifi" element={<Hero />} />
					<Route path="/chat" element={<Chatbot />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
