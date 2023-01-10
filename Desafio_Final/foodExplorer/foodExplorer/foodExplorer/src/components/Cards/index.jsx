import { Container } from './styles';

import { AiOutlineHeart, AiOutlineEdit, AiFillHeart } from 'react-icons/ai';

import { api } from '../../service/api';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

import { ButtonText } from '../Buttontext';
import { Button } from '../Button';
import { ButtonFavorite } from '../ButtonFavorite';
import { ButtonUpdate } from '../ButtonUpdate';

import { useNavigate } from 'react-router-dom';

function Card({ dish, routeUpdate, routeDetails }) {
  const { user } = useAuth();
  let avatarURL = `${api.defaults.baseURL}/files`;

  const [quantity, setQuantity] = useState(1);
  const [productFavorite, setProductFavorite] = useState(false);

  const navigate = useNavigate();

  let btnAdd = document.querySelector('.btnAdd');
  let btnRemove = document.querySelector('.btnRemove');

  function handleAddItem() {
    setQuantity(quantity + 1);
  }

  function handleRemoveItem() {
    setQuantity(quantity - 1);

    if (quantity == 1) {
      setQuantity(1);
    }
  }

  function update(id) {
    navigate(`${routeUpdate}/${id}`);
  }

  function details(id) {
    navigate(`${routeDetails}/${id}`);
  }

  let total;
  async function handleCreateOrder(name, price, quantities, total, image) {
    let p = Number(price.replace(',', '.')).toFixed(2);

    total = (p * quantity).toFixed(2);
    // alert(total);

    // alert(`${name} ${price} ${quantity} ${total} ${image}`);
    await api.post(`/order/${user.id}`, {
      name,
      price,
      quantity,
      total,
      image
    });

    alert('pedido realizado');
    window.location.reload(true);
  }

  return (
    <Container>
      <div className="card">
        <div className="favorite">
          {user.admin ? (
            <ButtonUpdate
              icon={AiOutlineEdit}
              id="dish"
              onClick={() => update(dish.id)}
            />
          ) : (
            <div />
          )}

          <div className="btnFavorites">
            <ButtonFavorite
              icon={AiOutlineHeart}
              id="btnFavorite"
              className="btnAdd "
            />
            <ButtonFavorite
              icon={AiFillHeart}
              id="btnFavorite"
              className="btnRemove hide"
            />
          </div>
        </div>
        <img
          src={`${avatarURL}/${dish.image}`}
          alt="imagem da sobremesa"
          onClick={() => details(dish.id)}
        />
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <div className="unitsAndInsert">
          <div>
            <p className="price">R$ {dish.price.replace('.', ',')}</p>
          </div>
          <div className="units">
            <ButtonText
              text="-"
              className="decrement"
              onClick={handleRemoveItem}
            />
            <span>{quantity}</span>
            <ButtonText
              text="+"
              className="increment"
              onClick={handleAddItem}
            />
            <Button
              text="incluir"
              className="insert"
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
      </div>
    </Container>
  );
}

export { Card };
