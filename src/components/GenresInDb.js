import React, { useEffect, useState } from "react";


function GenresInDb() {
  const [genres, setGenres] = useState([]);

  const callApi = async () => {
    try {
      const result = await fetch("api/products");
      const data = await result.json();
      return data.countByCategory;
    } catch (error) {
      throw "Ocurrio un error con fetch!!!";
    }
  };

  useEffect(async () => {
    let content = await callApi();
    setGenres(content);
  }, []);

  // let generos = Object.keys(genres)
  let generos =[
    "Acción",
    "Romance",
    "Aventura",
    "Suspenso",
    "Terror",
    "Biografía",
    "Literatura",
    "Científico",
    "Ciencia ficción",
    "Fantásia",
  ];
  let generosValues = Object.values(genres);

  let contenido = generos.map((item, index) => (
    <div className="col-lg-6 mb-4">
      <div className="card text-white bg-dark  shadow">
        <div className="card-body">
          {item} ({generosValues[index]})
        </div>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Generos en GaBook
            </h6>
          </div>
          <div className="card-body">
            <div className="row">{contenido}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GenresInDb;
