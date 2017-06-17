import React, { Component } from "react"; // looks in node_modules
import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Components/Recipe.js";
import { defaultRecipes } from "./data.js";
import RecipePage from "./Components/RecipePage.js";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class App extends Component {
	state = {
		recipes: [],
		active: {}
	};

	componentWillMount() {
		this.getRecipes();
	}

	getRecipes = () => {
		this.setState({
			recipes: defaultRecipes // get Data from database here
		});
	};

	getOneRecipe = id => {
		const recipe = this.state.recipes.find(recipe => {
			return recipe.id === id;
		});
		this.setState({
			active: recipe
		});
	};

	renderRecipes = () => {
		const recipes = this.state.recipes;
		return (
			<div className="recipes-container">
				{recipes.length !== 0 &&
					recipes.map(recipe =>
						<Link key={recipe.id} to={`/recipes/${recipe.id}`}>
							<Recipe
								id={recipe.id}
								getOneRecipe={this.getOneRecipe}
								title={recipe.title}
								image={recipe.image}
							/>
						</Link>
					)}
			</div>
		);
	};

	renderRecipePage = () => {
		return <RecipePage recipe={this.state.active} />;
	};

	render() {
		return (
			<Router>
				<div className="App">
					<Link to="/recipes">View All Recipes</Link>
					<Route exact path="/recipes" component={this.renderRecipes} />
					<Route exact path="/recipes/:id" component={this.renderRecipePage} />
				</div>
			</Router>
		);
	}
}

export default App;
