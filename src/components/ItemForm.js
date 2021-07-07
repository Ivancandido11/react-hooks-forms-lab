import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })
  const handleSelectChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [key]: value
    })
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()
    onItemFormSubmit(formData)
    setFormData({
      id: uuid(),
      name: "",
      category: "Produce"
    })
  }

  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleSelectChange}
        />
      </label>

      <label>
        Category:
        <select 
          onChange={handleSelectChange}
          name="category"
          value={formData.name}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
