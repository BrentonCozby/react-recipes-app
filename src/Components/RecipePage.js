import React from "react";

const RecipePage = ({ recipe }) => {
	const { title, image, description, ingredients, instructions } = recipe;

	return (
		<div className="RecipePage">
			<h2 className="title">{title}</h2>
			<img className="image" src={image} alt={title} />
			<p className="description">{description}</p>
			<h4>Ingredients</h4>
			<ul className="ingredients">
				{ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
			</ul>
			<h4>Instructions</h4>
			<ol className="instructions">
				{instructions.map(instruction =>
					<li key={instruction}>{instruction}</li>
				)}
			</ol>
		</div>
	);
};

export default RecipePage;
