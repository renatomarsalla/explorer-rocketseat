import { Container } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/Buttontext';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

import img from '../../assets/salada_molla.png';
import lettuce from '../../assets/alface.png';
import tomato from '../../assets/tomato.png';
import radish from '../../assets/radish.png';
import bread_noon from '../../assets/bread_naan.png';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../service/api';

let avatar = `${api.defaults.baseURL}/files`;

function Details() {
  const [data, setData] = useState('');
  const [listIngredients, setListIngredients] = useState('');
  const params = useParams();

  useEffect(() => {
    async function fetchDetails() {
      const response = await api.get(`/dishesUser/${params.id}`);
      // console.log(response.data.ingredients);
      setData(response.data);
    }

    fetchDetails();
  }, []);

  useEffect(() => {
    async function fetchListIngredients() {
      const response = await api.get(`/dishesUser/${params.id}`);
      const filter = response.data.ingredients.map(ing => ing.ingredients);

      let items, item;
      for (item of filter) {
        items = item;
      }
      const eachItem = items.split(',');
      setListIngredients(eachItem);
    }

    fetchListIngredients();
  }, []);

  return (
    <Container>
      <Header />
      <div className="page">
        <div className="return">
          <Button text="Voltar" icon={MdKeyboardArrowLeft} />
        </div>

        {data && (
          <main>
            <div className="dish">
              <img src={`${avatar}/${data.image}`} alt="dish selected" />
            </div>
            <div className="dishesIngredientsAndPrices">
              <div className="infos">
                <h1>{data.name}</h1>
                <span>{data.description}</span>
              </div>

              <div className="ingredientsTitle">
                <span>Ingredientes:</span>
              </div>
              <div className="ingredients">
                {listIngredients &&
                  listIngredients.map(ing => <label>{ing}</label>)}
              </div>

              {/* <div className="ingredients">
                {listIngredients &&
                  listIngredients.map(ing => (
                    <div className="ingredient">
                      <img src={lettuce} alt="imagem do alimento" />
                      <label>{ing}</label>;
                    </div>
                  ))}
              </div> */}

              <div className="priceAndUnits">
                <span className="price">R$ {data.price}</span>
                <div className="units">
                  <ButtonText text="-" className="decrement" />
                  <span>01</span>
                  <ButtonText text="+" className="increment" />
                  <Button
                    text="incluir"
                    icon={MdOutlineProductionQuantityLimits}
                  />
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
      <Footer />
    </Container>
  );
}

export { Details };
