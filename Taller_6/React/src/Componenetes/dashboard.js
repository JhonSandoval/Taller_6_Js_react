import React from "react";
import portada_receta from '../Componenetes/Img/portada_receta.jpg' 
import canciones from '../Componenetes/Img/canciones.jpg'
const Dashboard = () => {
    return(

<div className="container">
        <br />
        <div className="row">
            <div className="col">
                <div className="card">
                  {/**  <img className="card-img-top" src={portada_receta} alt="Card image" style="width:100%" />
                   */}<img className="card-img-top" src={portada_receta} />
                     <div className="card-body">
                      
                      <p className="card-text">Excelente recetas navideñas</p>
                      <a href="../componentes/cena.js" className="btn btn-primary">Ver</a>
                    </div>
                  </div>
            </div>
            <div className="col">
                <div className="card">
                  {/**  <img className="card-img-top" src="./src/img/game_number.webp" alt="Card image" style="width:100%">
                     */}
                     <img className="card-img-top" src={canciones} />
                     <div className="card-body">
                      <h4 className="card-title">Juegos con Numeros</h4>
                      <p className="card-text">Divertidos Juegos con Numeros</p>
                      <a href="./numeric_game.html" className="btn btn-primary">Ver Juegos</a>
                    </div>
                  </div>
            </div>
        </div>
     
</div>




    );
}

export default Dashboard;