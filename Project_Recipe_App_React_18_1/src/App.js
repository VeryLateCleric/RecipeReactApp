import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const handleRecipeCreate = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }

  const handleDeleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  // TODO:DONE Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO:UNDONE Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDeleteRecipe={handleDeleteRecipe}/>
      <RecipeCreate onRecipeCreate={handleRecipeCreate}/>
    </div>
  );
}

export default App;
