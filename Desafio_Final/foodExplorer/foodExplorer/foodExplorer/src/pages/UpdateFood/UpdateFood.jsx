import { Container, Buy } from './styles';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { IngredientItem } from '../../components/IngredientItem';

import { FaListAlt, FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import { HiOutlineShoppingBag } from 'react-icons/hi';

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../service/api';

function UpdateFood() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsNew, setIngredientsNew] = useState('');

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const [data, setData] = useState([]);
  const [listIngredients, setListIngredients] = useState('');

  const params = useParams();

  const navigate = useNavigate();

  async function handleUpdate(id) {
    !name ? setName(data.name) : name;
    !price ? setPrice(data.price) : price;
    !description ? setDescription(data.description) : description;
    // !ingredients ? setIngredients(data.ingredients) : ingredients;

    await api.put(`/dishes/${id}`, {
      name,
      price,
      description
      // image: imageFile
    });

    const fileUploadForm = new FormData();
    fileUploadForm.append('avatar', imageFile);

    if (!image) {
      alert('prato atualizada com sucesso');
    } else {
      await api.patch(`/dishes/avatar/${id}`, fileUploadForm);
      alert('prato atualizada com sucesso');
    }

    const ingredientsList = [...ingredients, ...listIngredients];
    await api.put(`ingredientsDish/${id}`, { ingredients: ingredientsList });
    navigate('/');
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
  }

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, ingredientsNew]);
    // console.log(ingredients);
    setIngredientsNew('');
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/dishesUser/${params.id}`);
      // console.log('response data', response.data);
      setData(response.data);
    }
    fetchData();
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
  }, [ingredients]);

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
                  <input
                    id="avatar"
                    type="file"
                    onChange={handleChangeAvatar}
                  />
                </label>
              </div>
            </div>
            <div className="name">
              <label>Nome</label>
              <input
                id="name"
                type="text"
                placeholder={data.name}
                // placeholder="Ex: Salada Caesar"
                // value={data.name}
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="ingredientsAndPrice">
            <div className="ingredients">
              <label>Ingredientes</label>
              <div className="ingredientsToAdd" key={data.id}>
                {listIngredients &&
                  listIngredients.map((ing, index) => (
                    <IngredientItem
                      // placeholder={ing}
                      key={String(index)}
                      value={ing}
                      onChange={e => setIngredients(e.target.value)}
                    />
                  ))}
                {/* <IngredientItem value="beterraba" /> */}
                {ingredients.map((ingredient, index) => (
                  <IngredientItem
                    value={ingredient}
                    onClick={() => {}}
                    key={String(index)}
                  />
                ))}
                <IngredientItem
                  placeholder="molho de tomate"
                  isNew
                  value={ingredientsNew}
                  onChange={e => setIngredientsNew(e.target.value)}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>
            <div className="price">
              <label>Preço</label>
              <input
                type="text"
                placeholder={`R$ ${data.price}`}
                // value={data.price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="description">
            <label htmlFor="">Descrição</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder={data.description}
              // value={data.description}
              onChange={e => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button className="addOrder" onClick={() => handleUpdate(data.id)}>
            Atualizar
          </button>
          {/* <img src={image} alt="" /> */}
        </main>
      </div>
      <Footer />
    </Container>
  );
}

export { UpdateFood };
