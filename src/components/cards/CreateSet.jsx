import React from 'react';
import { useState } from 'react';
import { redirect } from 'react-router-dom';

export default function CreateSet() {
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${formData.name}, Description: ${formData.description}`);
    return redirect('/');
  };

  return (
    <div className="createSet">
      <h2>Create a new set</h2>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
        <label htmlFor="description">Set description: </label>
        <textarea
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
