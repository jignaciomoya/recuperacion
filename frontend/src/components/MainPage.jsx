import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import Card from "./Card";

const MainPage = () => {
  const [data, setData] = useState([]);

  /* call para la ruta http://localhost:3000/api/product/all la cual devuelve un array de objetos */

  async function getAllProducts() {
    return fetch("http://localhost:3000/api/product/all")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }

  async function deleteProduct(id) {
    const response = await fetch(`http://localhost:3000/api/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);

    console.log(response);

    const products = await getAllProducts();
    setData(products);
  }

  useEffect(() => {
    const fetchData = async () => {
      const products = await getAllProducts();
      setData(products);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="cardContainer">
      {data.map((item, i) => (
        <Card
          {...item}
          key={i}
          onDelete={deleteProduct}
        />
      ))}
    </div>
  );
};

export default MainPage;
