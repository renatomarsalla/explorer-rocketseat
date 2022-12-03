import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/Buttontext';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import img from '../../assets/Mask group-3.png';
import lettuce from '../../assets/lettuce.png';
import tomato from '../../assets/tomato.png';
import radish from '../../assets/radish.png';
import bread_noon from '../../assets/bread_naan.png';

function Details() {
  return (
    <Container>
      <Header />
      <div className="page">
        <div className="return">
          <Button text="Voltar" icon={MdKeyboardArrowLeft} />
        </div>

        <main>
          <div className="dish">
            <img src={img} alt="dish selected" />
          </div>
          <div className="infos">
            <h1>Salada Ravanello</h1>
            <span>
              Salada Ravanello Rabanetes, folhas verdes e molho agridoce
              salpicados com gergelim.
            </span>
          </div>

          <div className="ingredients">
            <div className="ingredient">
              <img src={lettuce} alt="" />
              <label>alface</label>
            </div>
            <div className="ingredient">
              <img src={tomato} alt="" />
              <label>tomate</label>
            </div>
            <div className="ingredient">
              <img src={radish} alt="" />
              <label>rabanete</label>
            </div>
            <div className="ingredient">
              <img src={bread_noon} alt="" />
              <label>pão naan</label>
            </div>
          </div>

          <div className="priceAndUnits">
            <span className="price">R$ 25,97</span>
            <div className="units">
              <ButtonText text="-" className="decrement" />
              <span>01</span>
              <ButtonText text="+" className="increment" />
              <Button text="incluir" icon={MdOutlineProductionQuantityLimits} />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </Container>
  );
}

export { Details };
