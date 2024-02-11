import './Home.css';

import bolo from '../../img/Home/bolo_inicio.png';
import truffas from '../../img/Home/trufas.jpg';
import brigadeiros from '../../img/Home/brigadeiro_grande.jpg';

const Home: React.FC = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bolo} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={truffas} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={brigadeiros} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
