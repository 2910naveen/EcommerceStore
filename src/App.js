import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
     <Router>
      <Header />
       <Routes>
        <Route path='/' element={<ProductListing />}></Route>
        <Route path='/product/:productId' element={<ProductDetails/>}></Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
