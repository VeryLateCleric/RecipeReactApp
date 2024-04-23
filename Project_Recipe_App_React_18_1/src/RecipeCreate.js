import React, { useState } from "react";

function RecipeCreate() {
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRecipeCreate(formData);
    setFormData({
      name: "" ,
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    })
  }
  
  return (
    <form name="create">
      <table>
        <tbody>
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
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  export default RecipeCreate;
