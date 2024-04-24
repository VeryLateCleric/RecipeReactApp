import React, { useState } from "react";

function RecipeCreate( {onRecipeCreate} ) {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRecipeCreate(formData);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Cuisine:</td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Photo URL:</td>
            <td>
              <input
                type="text"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>Ingredients:</td>
            <td>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>Preparation:</td>
            <td>
              <textarea
                name="preparation"
                value={formData.preparation}
                onChange={handleChange}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
// TODO:DONE Add the required input and textarea form elements.
// TODO:DONE Add the required submit and change handlers.

export default RecipeCreate;
