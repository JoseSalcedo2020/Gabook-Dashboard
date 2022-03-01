import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowUsersBooks() {
  const [users, setUsers] = useState(0);
  const [products, setProducts] = useState(0);

  const callApi = async () => {
    try {
      const usersResult = await fetch("api/users");
      const productsResult = await fetch("api/products");
      const countUsers = await usersResult.json();
      const countProducts = await productsResult.json();
      return {
        countUsers: countUsers.count,
        countProducts: countProducts.count,
      };
    } catch (error) {
      throw "Ocurrio un error con fetch!!!";
    }
  };

  useEffect(async () => {
    let content = await callApi();
    setUsers(content.countUsers);
    setProducts(content.countProducts);
  }, []);

  /*  Cada set de datos es un objeto literal */

  let usersInDB = {
    title: "Usuarios Registrados",
    color: "primary",
    cuantity: users,
    icon: "fa-users",
  };

  let booksInDb = {
    title: " Total de libros",
    color: "success",
    cuantity: products,
    icon: "fa-book",
  };

  let countProps = [usersInDB, booksInDb];

  return (
    <div className=" total-products-users row">
      {countProps.map((item, i) => {
        return <SmallCard {...item} key={i} />;
      })}
    </div>
  );
}

export default ContentRowUsersBooks;
