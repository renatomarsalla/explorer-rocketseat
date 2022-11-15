import { Container, Favorites, Buy, Logout } from './styles';

import { ButtonText } from '../../components/Buttontext';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { FiSearch, FiLogOut } from 'react-icons/fi';
import { AiFillHeart } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
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
      />
      <Buy className="show">
        <FaShoppingCart />
      </Buy>
      <Button text="Meu pedido (0)" className="hide myOrder">
        <svg
          width="27"
          height="22"
          viewBox="0 0 27 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.96118 8C5.96118 7.44772 6.4089 7 6.96118 7H19.9612C20.5135 7 20.9612 7.44772 20.9612 8C20.9612 8.55229 20.5135 9 19.9612 9H6.96118C6.4089 9 5.96118 8.55229 5.96118 8Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.96118 12C5.96118 11.4477 6.4089 11 6.96118 11H19.9612C20.5135 11 20.9612 11.4477 20.9612 12C20.9612 12.5523 20.5135 13 19.9612 13H6.96118C6.4089 13 5.96118 12.5523 5.96118 12Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.04697 0.585787C1.42204 0.210714 1.93075 0 2.46118 0H24.4612C24.9916 0 25.5003 0.210714 25.8754 0.585787C26.2505 0.960861 26.4612 1.46957 26.4612 2V21C26.4612 21.3466 26.2817 21.6684 25.9869 21.8507C25.6921 22.0329 25.324 22.0494 25.014 21.8944L21.4612 20.118L17.9084 21.8944C17.6269 22.0352 17.2955 22.0352 17.014 21.8944L13.4612 20.118L9.90839 21.8944C9.62687 22.0352 9.2955 22.0352 9.01397 21.8944L5.46118 20.118L1.9084 21.8944C1.59841 22.0494 1.23027 22.0329 0.935451 21.8507C0.640634 21.6684 0.461182 21.3466 0.461182 21V2C0.461182 1.46957 0.671896 0.960859 1.04697 0.585787ZM24.4612 2L2.46118 2L2.46118 19.382L5.01397 18.1056C5.2955 17.9648 5.62687 17.9648 5.9084 18.1056L9.46118 19.882L13.014 18.1056C13.2955 17.9648 13.6269 17.9648 13.9084 18.1056L17.4612 19.882L21.014 18.1056C21.2955 17.9648 21.6269 17.9648 21.9084 18.1056L24.4612 19.382V2Z"
            fill="white"
          />
        </svg>
      </Button>
      <Logout className="logout">
        <FiLogOut />
      </Logout>
    </Container>
  );
}

export { Header };
