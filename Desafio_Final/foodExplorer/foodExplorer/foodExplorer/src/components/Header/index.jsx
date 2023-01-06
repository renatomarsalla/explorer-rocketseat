import { Container, Favorites, Buy, Logout } from './styles';

import { ButtonText } from '../../components/Buttontext';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { FiSearch, FiLogOut } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineShoppingBag } from 'react-icons/hi';

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

function Header({ search, searchDesserts, searchDrinks }) {
  const { logout } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    navigate('/');
    logout();
  }

  function myOrders() {
    navigate('/myOrder');
  }

  return (
    <Container>
      <div className="title hide">
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
        <h3>food explorer</h3>
        {/* <ButtonText text="Meus favoritos" className="hide btnFavorites" />; */}
      </div>
      <Favorites className="show">
        <AiFillHeart />
      </Favorites>
      <ButtonText text="Meus favoritos" className="hide btnFavorites" />
      <Input
        icon={FiSearch}
        type="text"
        placeholder="Busque pelas opções de pratos"
        onChange={e => {
          search(e.target.value);
          searchDesserts(e.target.value);
          searchDrinks(e.target.value);
        }}
      />
      <Buy className="show" onClick={myOrders}>
        <FaShoppingCart />
      </Buy>
      <Button
        text="Meu pedido (0)"
        className="hide myOrder"
        icon={HiOutlineShoppingBag}
        onClick={myOrders}
      ></Button>
      <Logout className="logout" onClick={handleLogout}>
        <FiLogOut />
      </Logout>
    </Container>
  );
}

export { Header };
