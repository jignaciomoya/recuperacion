import React, { useState } from "react";
import { Link, redirect, useParams } from "react-router-dom";

const UpdateFormComponent = () => {
    let {name, email, phone_number, id} = useParams();

  const [formData, setFormData] = useState({
    name: name || "",
    email: email || "",
    phone_number: phone_number || "",
  });

  function updateState(key, value) {
    setFormData({ ...formData, [key]: value });
  }

  async function updateProduct() {
    const response = await fetch(`http://localhost:3000/api/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => data);

    console.log(response);
    
  }



  return (
    <div>
      <form>
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
          onChange={(e) => { console.log("se cuela?"); updateState("email", e.target.value);}}
        />
        <label htmlFor="phone_number">Phone number</label>
        <input
          type="text"
          value={formData.phone_number}
          onChange={(e) => updateState("phone_number", e.target.value)}
        />
        <Link to="/main" onClick={() => updateProduct()}>Update</Link>
      </form>
    </div>
  );
};

export default UpdateFormComponent;
