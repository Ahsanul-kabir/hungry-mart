import { Route, Routes } from 'react-router-dom';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout/:foodId" element={<Checkout />} />
    </Routes>
  );
}

export default App;
