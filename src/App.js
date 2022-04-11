import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";


function App() {
	return (
		<>
			<BrowserRouter>
				<Header/>
				<main className="container content">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/contact" component={Contact}/>
						<Route path="/movie/:34?" component={Movie}/>
						<Route component={NotFound}/>
					</Switch>
				</main>
				<Footer/>
			</BrowserRouter>
		</>

	);
}

export default App;
