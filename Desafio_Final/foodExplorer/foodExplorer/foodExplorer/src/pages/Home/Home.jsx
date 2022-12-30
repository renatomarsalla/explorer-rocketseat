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
import salad from '../../assets/Mask group.png';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { api } from '../../service/api';
import { useReducer } from 'react';

function Home() {
  // const navigate = useNavigate();

  // function handleOpenDetails() {
  //   navigate('/details');
  // }

  const [dish, setDish] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get('/dishesUser');
      console.log(response.data);
      setDish(response.data);
    }
    fetchDishes();
  }, []);

  useEffect(() => {
    async function fetchDesserts() {
      const response = await api.get('/dessertsUser');
      console.log(response.data);
      setDesserts(response.data);
    }
    fetchDesserts();
  }, []);

  useEffect(() => {
    async function fetchDrinks() {
      const response = await api.get('/drinksUser');
      console.log(response.data);
      setDrinks(response.data);
    }
    fetchDrinks();
  }, []);

  return (
    <Container>
      <Header />

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
          <ul>
            {dish &&
              dish.map(dish => (
                <li key={String(dish.id)}>
                  <div className="card">
                    <div className="favorite">
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img src={dish.image} alt="" />
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
          <ul>
            {desserts &&
              desserts.map(dessert => (
                <li>
                  <div className="card">
                    <div className="favorite">
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img src={dessert.image} alt="" />
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
          <ul>
            {drinks &&
              drinks.map(drink => (
                <li>
                  <div className="card">
                    <div className="favorite">
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img src={drink.image} alt="" />
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

            <Button icon={MdKeyboardArrowLeft} className="arrowDishesLeft" />
            <Button icon={MdKeyboardArrowLeft} className="arrowDessertsLeft" />
            <Button icon={MdKeyboardArrowLeft} className="arrowDrinksLeft" />
            <Button icon={MdKeyboardArrowRight} className="arrowDishesRight" />
            <Button
              icon={MdKeyboardArrowRight}
              className="arrowDessertsRight"
            />
            <Button icon={MdKeyboardArrowRight} className="arrowDrinksRight" />
          </ul>
          {/* <div className="showDish"></div> */}
        </Section>
      </main>

      <Footer />
    </Container>
  );
}

export { Home };
