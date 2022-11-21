import React from "react";
import pavo from '../Componenetes/Img/pavo.jpg'
import pierna from '../Componenetes/Img/pierna.jpg'
import enchilada from '../Componenetes/Img/enchilada.jpg'

const Cena = () => {
    return(
    
    
<div className="card-group container" >
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">Pabo Navideño</h5>
      <img className="card-img-top" src={pavo}  alt="Card image cap" />
      <br />
      <br />
      <p className="card-text">
      El pavo navideño es el platillo principal por excelencia. Para que sigas con la tradición, te compartimos esta exquisita receta y te animes a prepararlo.
      </p>
      <p className="card-text">
      <h6> Ingredientes</h6>
    
      <ul>
      <li>  1 Pavo mediano </li>
      <li>  3 cdas. de paprika </li>
      <li>  1 taza de mermelada de chabacano  </li>
      <li>  1 taza de mantequilla derretida </li>
      <li>  4 dientes de ajo exprimidos  </li>
      <li>  ½ taza de soya  </li>
      <li>  4 tazas de papas cambray  </li>
      <li>  1 taza de chiles de árbol secos </li>
      <li>  1 taza de hojas de perejil </li>
      <li>  4 cdas. de aceite de oliva </li>
      <li>  1 cda. de ajo en polvo </li>
      </ul>

      </p>
      <h6> Preparación</h6>
        <p>
        Combina la paprika, mermelada de chabacano, mantequilla, ajo y soya. Barniza el pavo y salpimenta, hornea a 130º C durante 1 hora y media, vuelve a barnizar y hornea a 160 oC por 1 hora adicional.

        </p>
    </div>
    

  </div>
  <div className="card">
   {/*  <img className="card-img-top" src="..." alt="Card image cap">*/}
    <div className="card-body">
      <h5 className="card-title">Pierna de cerdo en adobo </h5>
      <img className="card-img-top" src={pierna}  alt="Card image cap" />
      <br />
      <br />
      <p className="card-text">Pierna de cerdo en adobo con mandarina segundo plato princinpal para una excelente cena para compartir en familia</p>
      <p className="card-text">
        <h6> Ingredientes</h6>
      <ul>
        <li> 1 pierna de cerdo cruda de 6-8 kg </li>
        <li> 1 cda. de achiote </li>
        <li> 3 tazas de jugo de mandarina </li>
        <li> 4 ramas de romero </li>
        <li> 1 cucharadita de comino en polvo </li>
        <li> 1 cucharadita de pimienta molida </li>
        <li> 1 taza de puré de chile guajillo </li>
      </ul>


      </p>
      
      <h6> Preparación </h6>
      <p>Licua el achiote con el chile guajillo, el jugo de mandarina, el comino y la pimienta. 
        Marina con esta mezcla la pierna de cerdo y el romero durante una noche </p>


    </div>
  </div>
  <div className="card">
   {/*  <img class="card-img-top" src="..." alt="Card image cap">*/}
    <div class="card-body">
      <h5 class="card-title">Pierna enchilada</h5>
      <img className="card-img-top" src={enchilada}  alt="Card image cap" />
      <br />
      <br />
      <p class="card-text">Disfruta de una cena inolvidable con esta deliciosa pierna de cerdo enchilada, es la opción perfecta para compartir en esta temporada
      </p>
      <p class="card-text">
      <h6> Ingredientes</h6>
    <ul>    
    <li>  1 1/2 kg pierna de cerdo </li>
    <li>  6 chiles ancho sin semillas </li>
    <li>6 chiles guajillo sin semillas </li>
    <li>2 chiles chipotles secos sin semillas</li>
    <li>1 raja de canela</li>
    <li>8 granos de pimienta negra</li>
    <li>1 cucharadita de semillas de comino</li>
    <li>2 cucharaditas de orégano</li>
    <li>2 hojas de laurel</li>
    <li>4 dientes de ajo</li>
    <li>1/3 de taza de vinagre de manzana</li>
    <li>Sal al gusto</li>
    </ul>


      </p>
      <h6> Preparación</h6>
      <p> 
      Remoja los chiles en agua hirviendo durante 20 minutos para que se suavicen; escúrrelos y reserva el líquido.

      </p>
    </div>
  </div>
</div>
    );
}

export default Cena;