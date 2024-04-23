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
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO:DONE Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} />
      <RecipeCreate onRecipeCreate={handleRecipeCreate}/>
    </div>
  );
}

export default App;
