import { Routes, Route } from 'react-router-dom';

import { AddDish } from '../pages/AddDish/AddDish';
import { AddDessert } from '../pages/AddDessert/AddDessert';
import { AddDrink } from '../pages/AddDrink/AddDrink';
import { Details } from '../pages/Details/Details';
import { DetailsDessert } from '../pages/DetailsDessert/Details';
import { DetailsDrink } from '../pages/DetailsDrink/Details';
import { EditDish } from '../pages/EditDish/EditDish';
import { Home } from '../pages/Home/Home';
import { MyOrder } from '../pages/MyOrder/MyOrder';
import { Order } from '../pages/Orders/Orders';
import { UpdateFood } from '../pages/UpdateFood/UpdateFood';
import { UpdateDessert } from '../pages/UpdateDessert/UpdateDessert';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/addDish" element={<AddDish />} />
      <Route path="/addDessert" element={<AddDessert />} />
      <Route path="/addDrink" element={<AddDrink />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/detailsDessert/:id" element={<DetailsDessert />} />
      <Route path="/detailsDrink/:id" element={<DetailsDrink />} />
      <Route path="/editDish/:id" element={<EditDish />} />
      <Route path="/update/:id" element={<UpdateFood />} />
      <Route path="/updateDessert/:id" element={<UpdateDessert />} />
      <Route path="/updateDrink/:id" element={<UpdateFood />} />
      <Route path="/" element={<Home />} />
      <Route path="/myOrder" element={<MyOrder />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export { AppRoutes };
