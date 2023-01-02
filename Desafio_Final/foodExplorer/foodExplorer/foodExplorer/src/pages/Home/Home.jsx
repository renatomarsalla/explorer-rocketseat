import { Container } from './styles';

import { AiOutlineHeart } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/Buttontext';
import { Button } from '../../components/Button';
import { ButtonFavorite } from '../../components/ButtonFavorite';

import img from '../../assets/principal.png';
// import salad from '../../assets/Mask group.png';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect, useRef } from 'react';
import { api } from '../../service/api';

function Home() {
  // const navigate = useNavigate();

  // function handleOpenDetails() {
  //   navigate('/details');
  // }

  const [dish, setDish] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);

  const [search, setSearch] = useState([]);

  let avatarURL = `${api.defaults.baseURL}/files`;

  const carousel = useRef(null);
  const carouselDesserts = useRef(null);
  const carouselDrinks = useRef(null);

  const handleLeftClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = e => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const handleLeftClickDesserts = e => {
    e.preventDefault();
    carouselDesserts.current.scrollLeft -= carouselDesserts.current.offsetWidth;
  };

  const handleRightClickDesserts = e => {
    e.preventDefault();
    carouselDesserts.current.scrollLeft += carouselDesserts.current.offsetWidth;
  };

  const handleLeftClickDrinks = e => {
    e.preventDefault();
    carouselDrinks.current.scrollLeft -= carouselDrinks.current.offsetWidth;
  };

  const handleRightClickDrinks = e => {
    e.preventDefault();
    carouselDrinks.current.scrollLeft += carouselDrinks.current.offsetWidth;
  };

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get('/dishesUser');
      // console.log('response data', response.data);
      setDish(response.data);
    }
    fetchDishes();
  }, []);

  useEffect(() => {
    async function fetchDesserts() {
      const response = await api.get('/dessertsUser');
      // console.log(response.data);
      setDesserts(response.data);
    }
    fetchDesserts();
  }, []);

  useEffect(() => {
    async function fetchDrinks() {
      const response = await api.get('/drinksUser');
      setDrinks(response.data);
    }
    fetchDrinks();
  }, []);

  useEffect(() => {
    async function searchDishes() {
      const response = await api.get(`/searchDish?name=${search}`);
      setDish(response.data);
    }

    searchDishes();
  }, [search]);

  return (
    <Container>
      <Header search={setSearch} />

      <div className="imgAndTitle">
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
          <ul ref={carousel}>
            {dish &&
              dish.map(dish => (
                <li key={String(dish.id)}>
                  <div className="card">
                    <div className="favorite">
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img
                      src={`${avatarURL}/${dish.image}`}
                      alt="imagem do prato"
                    />

                    <h2>{dish.name}</h2>
                    <p>{dish.description}</p>
                    <span>R$ {dish.price}</span>
                    <div className="unitsAndInsert">
                      <ButtonText text="-" className="decrement" />
                      <span>01</span>
                      <ButtonText text="+" className="increment" />
                      <Button text="incluir" />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          {/* <div className="showDish"></div> */}
        </Section>
        <Section title="Sobremesas">
          <ul ref={carouselDesserts}>
            {desserts &&
              desserts.map(dessert => (
                <li key={dessert.id}>
                  <div className="card">
                    <div className="favorite">
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img
                      src={`${avatarURL}/${dessert.image}`}
                      alt="imagem da sobremesa"
                    />
                    <h2>{dessert.name}</h2>
                    <p>{dessert.description}</p>
                    <span>R$ {dessert.price}</span>
                    <div className="unitsAndInsert">
                      <ButtonText text="-" className="decrement" />
                      <span>01</span>
                      <ButtonText text="+" className="increment" />
                      <Button text="incluir" />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          {/* <div className="showDish"></div> */}
        </Section>
        <Section title="Bebidas">
          <ul ref={carouselDrinks}>
            {drinks &&
              drinks.map(drink => (
                <li key={drink.id}>
                  <div className="card">
                    <div className="favorite">
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img
                      src={`${avatarURL}/${drink.image}`}
                      alt="imagem da bebida"
                    />
                    <h2>{drink.name}</h2>
                    <p>{drink.description}</p>
                    <span>R$ {drink.price}</span>
                    <div className="unitsAndInsert">
                      <ButtonText text="-" className="decrement" />
                      <span>01</span>
                      <ButtonText text="+" className="increment" />
                      <Button text="incluir" className="insert" />
                    </div>
                  </div>
                </li>
              ))}

            <Button
              icon={MdKeyboardArrowLeft}
              className="arrowDishesLeft"
              onClick={handleLeftClick}
            />
            <Button
              icon={MdKeyboardArrowLeft}
              className="arrowDessertsLeft"
              onClick={handleLeftClickDesserts}
            />
            <Button
              icon={MdKeyboardArrowLeft}
              className="arrowDrinksLeft"
              onClick={handleLeftClickDrinks}
            />
            <Button
              icon={MdKeyboardArrowRight}
              className="arrowDishesRight"
              onClick={handleRightClick}
            />
            <Button
              icon={MdKeyboardArrowRight}
              className="arrowDessertsRight"
              onClick={handleRightClickDesserts}
            />
            <Button
              icon={MdKeyboardArrowRight}
              className="arrowDrinksRight"
              onClick={handleRightClickDrinks}
            />
          </ul>
          {/* <div className="showDish"></div> */}
        </Section>
      </main>

      <Footer />
    </Container>
  );
}

export { Home };
