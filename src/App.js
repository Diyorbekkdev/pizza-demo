
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home/Home';
import CartCards from './pages/Home/cartCards/CartCards';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="cart" element={<CartCards/>}/>
        <Route path="favorite" />
      </Route>
    </Routes>
      <ToastContainer/>
  </BrowserRouter>
  );
}

export default App;
