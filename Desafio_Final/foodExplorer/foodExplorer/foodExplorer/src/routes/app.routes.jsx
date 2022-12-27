import { Routes, Route } from 'react-router-dom';

import { AddDish } from '../pages/AddDish/AddDish';
import { Details } from '../pages/Details/Details';
import { EditDish } from '../pages/EditDish/EditDish';
import { Home } from '../pages/Home/Home';
import { MyOrder } from '../pages/MyOrder/MyOrder';
import { Order } from '../pages/Orders/Orders';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/addDish" element={<AddDish />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/editDish/:id" element={<EditDish />} />
      <Route path="/" element={<Home />} />
      <Route path="/myOrder" element={<MyOrder />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}

export { AppRoutes };
