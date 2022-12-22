import { Container, Buy } from './styles';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { IngredientItem } from '../../components/IngredientItem';

import { FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { HiOutlineShoppingBag } from 'react-icons/hi';

function AddDish() {
  return (
    <Container>
      <header>
        <div className="logoAndTitle">
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0635 0.550903L25.7096 7.85208V22.4544L13.0635 29.7556L0.417527 22.4544V7.85208L13.0635 0.550903Z"
              fill="#065E7C"
            />
          </svg>

          <h3>food explorer</h3>
        </div>

        <div className="userAndOrders">
          <span>Admin</span>
          <Button
            text="Meu pedido (0)"
            className="hide"
            icon={HiOutlineShoppingBag}
          />
          <Buy className="show">
            <FaShoppingCart />
          </Buy>
        </div>
      </header>

      <div className="page">
        <main>
          <div className="return">
            <Button text="Voltar" icon={MdKeyboardArrowLeft} />
            <h2>Editar prato</h2>
          </div>

          <div className="imageAndNameDish">
            <div className="image">
              <label className="imageDish">Imagem do prato</label>
              <div>
                <label htmlFor="avatar">
                  <FaShoppingCart />
                  Selecione a imagem
                  <input id="avatar" type="file" />
                </label>
              </div>
            </div>
            <div className="name">
              <label>Nome</label>
              <input type="text" placeholder="Ex: Salda Caesar" />
            </div>
          </div>

          <div className="ingredientsAndPrice">
            <div className="ingredients">
              <label>Ingredientes</label>
              <div className="ingredientsToAdd">
                <IngredientItem value="beterraba" />
                <IngredientItem value="molho de tomate" isNew />
              </div>
            </div>
            <div className="price">
              <label>Preço</label>
              <input type="text" placeholder="RS 00,00" />
            </div>
          </div>

          <div className="description">
            <label htmlFor="">Descrição</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <button className="addOrder">Adicionar pedido</button>
        </main>
      </div>
      <Footer />
    </Container>
  );
}

export { AddDish };
