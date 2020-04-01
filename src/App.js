import React from 'react';
import './App.css';

function App() {
  return (
    <section className="wrapper">
      <section className="basic-information">
        <h3>Información básica</h3>
        <ul>
          <li>Nombre Completo: <b>Jhon Alexander Gil Beltran</b></li>
          <li>Identificación: <b>1.022.987.868 Bogotá D.C.</b></li>
          <li>Profesión: <b>Front-end Developer</b></li>
          <li>Correo electrónico: <b>johnalexand3rg@gmail.com</b></li>
          <li>Sectores de experiencia: <b>Soporte IT, Front-end Developer, Fotografía, Diseño.</b></li>
          <li>Disponibilidad: <b>Completo.</b></li>
        </ul>
      </section>
      <section>
        <div>
          <h3>¿Sabe usted qué es la CAEM y qué hace por los empresarios de la ciudad?</h3>
          <p>Entidad comprometida en el la gestion ambiental, servicios de apoyo ambiental al sector empresarial.</p>
        </div>
        <div>
          <h3>Mencione los programas o proyectos que conoce de la CAEM.</h3>
          <span>Restauración y Conservación</span>
          <ul>
            <li>Hojas Verdes</li>
            <li>Parques ecológicos</li>
          </ul>
        </div>
        <div>
          <h3>¿Conoce usted cual es el programa más antiguo liderado por la CAEM y en qué consiste?</h3>
          <p>Huella hídrica, en el uso y ahorro eficiente del agua.</p>
        </div>
      </section>
      <section>
        <div>
          <h3>¿Sería mejor en pagina web o en aplicación?</h3>
          <p>En este caso el desarrollo de una Aplicación móvil (app) por que sería más dinámica e intuitiva para el objetivo que se quiere lograr.</p>
        </div>
        <div>
          <h3>¿Qué funciones podría tener ese aplicativo?</h3>
          <p>Registro de usuario, información completa sobre el árbol sembrado (fotos), asignación de un nombre por el usuario, ubicación exacta de este.</p>
        </div>
        <div>
          <h3>¿Cuál cree que puede ser el costo aproximado de ese proyecto y por qué?</h3>
          <p>
            los costos de un desarrollo a esta escala puede partir desde los 7.000 usd en adelante por que se deben considerar temas de almacenamiento, medios de pago, fotografias
          </p>
        </div>
        <div>
          <h3>¿Cómo gestionaría ese proyecto?</h3>
          <ul>
            <li>Recolección de datos básicos.</li>
            <li>Imágenes del área. </li>
            <li>Cantidad de árboles que podrán ser sembrados en totalidad.</li>
            <li>Utilizando la API de Google Maps poder marcar el área la cual será disponible a sembrar.</li>
            <li>Contratación de una empresa de desarrollo en el área especifico para llevar a cabo el desarrollo de esta aplicación.</li>
            <li>Revisión de un marco conceptual de las ideas.</li>
            <li>Wireframes, Prototipos y Mockups previos.</li>
            <li>Diseño final de la plataforma.</li>
            <li>Análisis de tecnologías a utilizar debido a que será una aplicación multiplataforma.</li>
            <li>Estudios bajo un MPV (Mínimo Producto Viable).</li>
            <li>Entregable de este desarrollo (Código fuente) y revisión en las tiendas de almacenamiento.</li>
          </ul>
        </div>
      </section>
      <div>
        Aspiración salarial: <b>$3.200.000</b>
      </div>
      <div>
        <h3>Portafolio</h3>
        <p>
          En Behance: <a href="https://www.behance.net/gallery/70912287/KIUX-beyond-time" target="_blank" rel="noopener noreferrer">KIUX-beyond-time</a> link a la aplicación <a href="kiux.app" target="_blank" rel="noopener noreferrer">kiux.app</a>
        </p>
      </div>
      <div>
        Linkedin <a href="https://www.linkedin.com/in/jhonalexanderg/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jhonalexanderg/</a>
      </div>
      <div>
        <h3>Tecnologías utilizadas</h3>
        <ul>
          <li>Git y GitHub
            <ul>
              <li>Repositorio: <a href="https://github.com/JohnAlexanderG">https://github.com/JohnAlexanderG</a></li>
              <li>Repositorio de este sitio: <a href="https://github.com/JohnAlexanderG/CAEM">https://github.com/JohnAlexanderG/CAEM</a></li>
            </ul>
          </li>
          <li>React</li>
          <li>Netlify</li>
        </ul>
      </div>
      <div className="wrapper__image">
        <img src="https://www.caem.org.co/wp-content/uploads/2019/07/CAEM-CCB1507.png" alt="CAEM"/>
      </div>
    </section>
  );
}

export default App;
