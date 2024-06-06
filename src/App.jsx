import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './pages/login';
import Dashboard from './pages/Dashboard';
import Product from './pages/product';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Header />} > */}
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:product_id" element={<Product />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
