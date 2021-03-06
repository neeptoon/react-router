import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import Recipe from "./Components/Recipe";

function App() {
	return (
		<>
			<BrowserRouter basename="/react-router">
				<Header/>
				<main className="container content">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/about" component={About}/>
						<Route path="/contact" component={Contact}/>
						<Route path="/category/:name?" component={Category}/>
						<Route path="/meal/:id?" component={Recipe}/>
						<Route component={NotFound}/>
					</Switch>
				</main>
				<Footer/>
			</BrowserRouter>
		</>

	);
}

export default App;
