import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About';
import Skills from './Pages/Skills';
import { ErrorPage } from './Pages/ErrorPage';
import Contact from './Pages/Contact';
import Qualification from './Pages/Qualification';
import FullScreenComponent from './components/FullScreenComponent';

function App() {
	return (
		<div>
			<FullScreenComponent />
			<Router>
				<Routes>
					<Route path="*" element={<ErrorPage />} />
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/qualification" element={<Qualification />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
