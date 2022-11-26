import { Container } from './styles';

import { AiOutlineHeart } from 'react-icons/ai';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/Buttontext';
import { Button } from '../../components/Button';
import { ButtonFavorite } from '../../components/ButtonFavorite';

import img from '../../assets/principal.png';
import salad from '../../assets/Mask group.png';

function Home() {
  return (
    <Container>
      <Header />

      <div className="imgAndTitle">
        <div className="foodExplorer show">
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z"
              fill="#065E7C"
            />
          </svg>

          <h1>food explorer</h1>
        </div>
        <div className="titles">
          <img
            src={img}
            alt="image of macarrons and raspberry"
            className="hide"
          />
          <div className="subtitles">
            <h3>Sabores inigualáveis</h3>
            <h4>Sinta o cuidado do preparo com ingredientes selecionados</h4>
          </div>
        </div>
      </div>

      <main>
        <Section title="Pratos principais">
          <ul>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
          </ul>
          {/* <div className="showDish"></div> */}
        </Section>
        <Section title="Sobremesas">
          <ul>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
          </ul>
          {/* <div className="showDish"></div> */}
        </Section>
        <Section title="Bebidas">
          <ul>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" className="insert" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
            <li>
              <div className="card">
                <div className="favorite">
                  <ButtonFavorite icon={AiOutlineHeart} />
                </div>
                <img src={salad} alt="" />
                <h2>Salada Ravanello</h2>
                <p>
                  Rabanetes, folhas verdes e molho agridoce salpicados com
                  gergelim
                </p>
                <span>R$ 49,97</span>
                <div className="unitsAndInsert">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button text="incluir" />
                </div>
              </div>
            </li>
          </ul>
          {/* <div className="showDish"></div> */}
        </Section>
      </main>

      <Footer />
    </Container>
  );
}

export { Home };
