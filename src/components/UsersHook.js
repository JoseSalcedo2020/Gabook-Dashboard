import React, { useState, useEffect } from "react";

function Users() {
  const [usersList, setUsersList] = useState([]);

  const callUsersApi = async () => {
    try {
      const result = await fetch("api/users");
      const data = await result.json();
      return data.users;
    } catch (error) {
      throw "Ocurrio un error con fetch!!!";
    }
  };

  useEffect(async () => {
    let content = await callUsersApi();
    console.log(content);
    setUsersList(content);
  }, []);

  let contenido =
    usersList.length > 0 ? (
      usersList.map((user, index) => (
        <tr key={index}>
          <td>{user.id}</td>
          <td>{user.user_name}</td>
          <td>{user.user_email}</td>
          {/* <td>{user.rol}</td> */}
        </tr>
      ))
    ) : (
      <tr>
        <td>...Cargando</td>
        <td>...Cargando</td>
        <td>...Cargando</td>
      </tr>
    );

  return (
    <React.Fragment>
      {/*<!-- PRODUCTS LIST -->*/}
      <h1 className=" content-tittle h3 mb-2 text-gray-800">
        Usuarios registrados
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
                  <th>Usuario</th>
                  <th>Correo</th>
                  {/* <th>Rol</th> */}
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Id</th>
                  <th>Usuario</th>
                  <th>Correo</th>
                  {/* <th>Rol</th> */}
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

export default Users;
