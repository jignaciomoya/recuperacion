import React, { useState } from "react";
import { Link } from "react-router-dom";
/*
 name: {
        type: String,
        required: [true, 'name is required'],
    },
    phone_number: {
        type: String,
        required: [true, 'phone number is required'],
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
*/

const CreateFormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  function updateState(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  async function addProduct() {
    await fetch(`http://localhost:3000/api/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <form onSubmit={() => addProduct()}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateState("name", e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) => updateState("email", e.target.value)}
        />
        <label htmlFor="phone_number">Phone number</label>
        <input
          type="text"
          value={formData.phone_number}
          onChange={(e) => updateState("phone_number", e.target.value)}
        />
        <Link to="/main" onClick={() => addProduct()}>
          Submit
        </Link>
      </form>
    </div>
  );
};

export default CreateFormComponent;
