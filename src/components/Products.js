import React, { useState, useEffect } from "react";

function Products() {
  const [productsList, setProductsList] = useState([]);

  const callProductsApi = async () => {
    try {
      const result = await fetch("api/products");
      const data = await result.json();
      return data.books;
    } catch (error) {
      throw "Ocurrio un error con fetch!!!";
    }
  };

  useEffect(async () => {
    let content = await callProductsApi();
    setProductsList(content);
  }, []);

  let contenido =
    productsList.length > 0 ? (
      productsList.map((book, index) => (
        <tr key={index}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.genre.name}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td>...Cargando</td>
        <td>...Cargando</td>
        <td>...Cargando</td>
        <td>...Cargando</td>
      </tr>
    );

  return (
    <React.Fragment>
      {/*<!-- PRODUCTS LIST -->*/}
      <h1 className=" content-tittle h3 mb-2 text-gray-800">
        Libros Resgistrados
      </h1>

      {/*<!-- DataTales Example -->*/}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Titulo</th>
                  <th>Autor</th> 
                  <th>Genero</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Titulo</th>
                  <th>Autor</th> 
                  <th>Genero</th>
                </tr>
              </tfoot>
              <tbody>{contenido}</tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
