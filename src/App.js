import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header/Header';
import PizzaShowcase from './pages/PizzaShowcase/PizzaShowcase';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/PizzaShowcase/Home/Home';
function App() {
  return (
    <div className="App">
      
    
          <BrowserRouter>
            <Routes>
        <Route path='/' element={<Home />} />
         </Routes>
          </BrowserRouter>

         
       
    </div>
  );
}

export default App;
