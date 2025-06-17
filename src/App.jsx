import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import CatalogPage from './pages/CatalogPage';
import ContactsPage from './pages/ContactsPage';
import HomePage from './pages/HomePage';
import InformationPage from './pages/InformationPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/catalog" element={<CatalogPage />}/>
          <Route path="/about" element={<InformationPage />}/>
          <Route path="/contacts" element={<ContactsPage />}/>
          <Route path="/cart" element={<CartPage />}/>
          <Route path="/catalog/:id" element={<ItemPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
