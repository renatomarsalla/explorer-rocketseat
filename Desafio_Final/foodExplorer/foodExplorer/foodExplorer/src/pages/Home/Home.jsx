import { Container } from './styles';

import { AiOutlineHeart, AiOutlineEdit } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  MdKeyboardArrowLeft,
  MdChangeCircle,
  MdSystemUpdate
} from 'react-icons/md';
import { GrUpdate, GrDocumentUpdate } from 'react-icons/gr';
// import { GrUpdate } from 'react-icons/';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/Buttontext';
import { Button } from '../../components/Button';
import { ButtonFavorite } from '../../components/ButtonFavorite';
import { ButtonUpdate } from '../../components/ButtonUpdate';
import { Card } from '../../components/Cards';

import { Quantity } from '../../components/Quantity';

import img from '../../assets/principal.png';
// import salad from '../../assets/Mask group.png';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { api } from '../../service/api';

import { useAuth } from '../../hooks/auth';

function Home() {
  const [dish, setDish] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  // const [data, setData] = useState([]);

  const [search, setSearch] = useState([]);
  const [searchDesserts, setSearchDesserts] = useState([]);
  const [searchDrinks, setSearchDrinks] = useState([]);

  let avatarURL = `${api.defaults.baseURL}/files`;

  const carousel = useRef(null);
  const carouselDesserts = useRef(null);
  const carouselDrinks = useRef(null);
  const unit = useRef(1);
  const [units, setUnits] = useState(1);

  const navigate = useNavigate();

  const { user } = useAuth();

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

  // function handleDetails(id) {
  //   navigate(`/details/${id}`);
  // }

  // function handleDetailsDessert(id) {
  //   navigate(`/detailsDessert/${id}`);
  // }

  // function handleDetailsDrink(id) {
  //   navigate(`/detailsDrink/${id}`);
  // }

  // function updateDish(id) {
  //   navigate(`/update/${id}`);
  // }

  // function updateDessert(id) {
  //   navigate(`/updateDessert/${id}`);
  // }

  // function updateDrink(id) {
  //   navigate(`/updateDrink/${id}`);
  // }

  function routeAddDish() {
    navigate('/addDish');
  }

  // const [unitsToDish, setUnitsToDish] = useState('');

  let quantity;
  let total;
  async function handleCreateOrder(name, price, quantity, total, image) {
    quantity = document.querySelector('.quantity').innerHTML;

    // total = (parseFloat(quantity).toFixed(2) * parseFloat(price)).toFixed(2);
    // alert(total);

    let p = Number(price.replace(',', '.'));
    let q = Number(quantity.replace(',', '.'));

    total = (p * q).toFixed(2);
    alert(total);

    // return;

    alert(`${name} ${price} ${quantity} ${total} ${image}`);
    await api.post(`/order/${user.id}`, {
      name,
      price,
      quantity,
      total,
      image
    });

    // console.log('dish', dish.name);

    alert('pedido realizado');
  }

  async function add(id) {
    // alert(typeof id);
    const id_dish = await api.get('/dishesUser');
    const filtered = id_dish.data.filter(dish_id => dish_id.id === id);

    const filter2 = filtered.filter(dish_id => dish_id.id === id);

    // console.log(filtered);
    // console.log(filter2);

    let idInArray;
    for (id of filter2) {
      idInArray = id.id;
      // console.log(id.id);
    }
    // console.log(id.id);
    // console.log(typeof id, typeof idInArray);
    if (id.id == idInArray) {
      // alert('ok');
      setUnits(prevState => prevState + 1);
    }

    // console.log(units);
  }

  function remove() {
    setUnits(prevState => prevState - 1);

    if (units <= 1) {
      setUnits(1);
    }
  }

  let alt1, alt2, alt3;
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get('/dishesUser');
      // console.log('response data', response.data);
      alt1 = response.data;
      setDish(response.data);
      // setData(response.data);
      // console.log('response', response.data);s
    }
    fetchDishes();
  }, []);

  useEffect(() => {
    async function fetchDesserts() {
      const response = await api.get('/dessertsUser');
      // console.log(response.data);
      setDesserts(response.data);
      // console.log('data', response.data);
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

  useEffect(() => {
    async function searchDessert() {
      const response = await api.get(`/searchDessert?name=${searchDesserts}`);
      setDesserts(response.data);
    }

    searchDessert();
  }, [searchDesserts]);

  useEffect(() => {
    async function searchDrink() {
      const response = await api.get(`/searchDrink?name=${searchDrinks}`);
      setDrinks(response.data);
    }

    searchDrink();
  }, [searchDrinks]);

  return (
    <Container>
      <Header
        search={setSearch}
        searchDesserts={setSearchDesserts}
        searchDrinks={setSearchDrinks}
      />

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
        <Section title="Pratos principais" className="dishes">
          <ul ref={carousel}>
            {dish &&
              dish.map(dish => (
                <li key={String(dish.id)}>
                  <Card
                    dish={dish}
                    routeUpdate={'/update'}
                    routeDetails={'/details'}
                  />
                </li>
              ))}
          </ul>
        </Section>

        <Section title="Sobremesas" className="dishes">
          <ul ref={carouselDesserts}>
            {desserts &&
              desserts.map(dessert => (
                <li key={String(dessert.id)}>
                  <Card
                    dish={dessert}
                    routeUpdate={'/updateDessert'}
                    routeDetails={'/detailsDessert'}
                  />
                </li>
              ))}
          </ul>
        </Section>

        <Section title="Bebidas" className="dishes">
          <ul ref={carouselDrinks}>
            {drinks &&
              drinks.map(drink => (
                <li key={String(drink.id)}>
                  <Card
                    dish={drink}
                    routeUpdate={'/updateDrink'}
                    routeDetails={'/detailsDrink'}
                  />
                </li>
              ))}
          </ul>

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
        </Section>

        {/* <Section title="Pratos principais">
          <ul ref={carousel}>
            {dish &&
              dish.map(dish => (
                <li key={String(dish.id)}>
                  <div className="card">
                    <div className="favorite">
                      {user.admin && (
                        <ButtonUpdate
                          icon={AiOutlineEdit}
                          id="dish"
                          onClick={() => updateDish(dish.id)}
                        />
                      )}
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img
                      src={`${avatarURL}/${dish.image}`}
                      alt="imagem do prato"
                      onClick={() => handleDetails(dish.id)}
                    />

                    <h2>{dish.name}</h2>
                    <p>{dish.description}</p>
                    <span>R$ {dish.price.replace('.', ',')}</span>

                    <div className="unitsAndInsert">
                      <ButtonText
                        text="-"
                        className="decrement"
                        onClick={remove}
                      />
                      <span className="quantity">{units}</span>
                      <ButtonText
                        text="+"
                        className="increment"
                        onClick={() => add(dish.id)}
                      />
                      <Button
                        text="incluir"
                        onClick={() =>
                          handleCreateOrder(
                            dish.name,
                            dish.price,
                            quantity,
                            total,
                            dish.image
                          )
                        }
                      />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </Section>
        <Section title="Sobremesas">
          <ul ref={carouselDesserts}>
            {desserts &&
              desserts.map(dessert => (
                <li key={dessert.id}>
                  <div className="card">
                    <div className="favorite">
                      {user.admin && (
                        <ButtonUpdate
                          icon={AiOutlineEdit}
                          id="dish"
                          onClick={() => updateDessert(dessert.id)}
                        />
                      )}
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img
                      src={`${avatarURL}/${dessert.image}`}
                      alt="imagem da sobremesa"
                      onClick={() => handleDetailsDessert(dessert.id)}
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
        </Section>
        <Section title="Bebidas">
          <ul ref={carouselDrinks}>
            {drinks &&
              drinks.map(drink => (
                <li key={drink.id}>
                  <div className="card">
                    <div className="favorite">
                      {user.admin && (
                        <ButtonUpdate
                          icon={AiOutlineEdit}
                          id="dish"
                          onClick={() => updateDrink(drink.id)}
                        />
                      )}
                      <ButtonFavorite icon={AiOutlineHeart} />
                    </div>
                    <img
                      src={`${avatarURL}/${drink.image}`}
                      alt="imagem da bebida"
                      onClick={() => handleDetailsDrink(drink.id)}
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
        </Section> */}
      </main>

      <div className="newProduct">
        {user.admin && (
          <Button
            text="Cadastrar novo item"
            className="newRegister"
            onClick={routeAddDish}
          />
        )}
      </div>

      <Footer />
    </Container>
  );
}

export { Home };
