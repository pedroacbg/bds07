import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../components/ButtonIcon';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="base-card bcolor-blue home-card">
        <div className="home-content-container">
          <div className="home-image-container">
            <MainImage />
          </div>
          <div>
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na <br /> realização do
              seu sonho
            </p>
          </div>
        </div>
      </div>
      <div className="base-card home-bottom-card bcolor-grey">
        <div>
          <Link to="/products">
            <ButtonIcon text="ver catálogo" />
          </Link>
        </div>
        <div>
          <p>Comece agora a navegar</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
