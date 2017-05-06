import React, {Component} from 'react'; // looks in node_modules
import logo from './logo.svg';
import './App.css';
import Card from './Card.js'
import { defaultRecipes } from './data.js'
import RecipePage from './RecipePage.js'
import {
    BrowserRouter as Router,
    Link,
    Route
} from 'react-router-dom'

class App extends Component {

    state = {
        recipes: [],
        active: {}
    }

    componentWillMount() {
        this.getRecipes()
    }

    getRecipes = () => {
        this.setState({
            recipes: defaultRecipes // get Data from database here
        })
    }

    getOneRecipe = (id) => {
        const recipe = this.state.recipes.find(recipe => {
            return recipe.id === id
        })
        this.setState({
            active: recipe
        })
    }

    renderRecipes = () => {
        const recipes = this.state.recipes
        return (
            <div className="cards-container">
                {recipes.length !== 0 && recipes.map(recipe => (
                    <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
                        <Card
                            id={recipe.id}
                            getOneRecipe={this.getOneRecipe}
                            title={recipe.title}
                            image={recipe.image}
                        />
                    </Link>
                ))}
            </div>
        )
    }

    renderRecipePage = () => {
        return (
            <RecipePage recipe={this.state.active} />
        )
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to React</h2>
                    </div>
                    <Link to="/recipes">View All Recipes</Link>
                    <Route exact path="/recipes" component={this.renderRecipes} />
                    <Route exact path="/recipes/:id" component={this.renderRecipePage} />
                </div>
            </Router>
        );
    }
}

export default App;
