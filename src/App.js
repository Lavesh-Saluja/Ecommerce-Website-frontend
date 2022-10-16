import React from 'react';
import {Container} from "react-bootstrap";
import Header from './Components/Header';
import Footer from "./Components/Footer";
import Home from './Screens/Home';
import ProductScreen from './Screens/ProductScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
    <div>
      <Header />
      <main className="py-0">
      <Container>
      <Routes>
      
     <Route exact path="/" element={<Home />} />
      
     <Route  path="/product/:id" element={<ProductScreen />} />  
     </Routes>
      
        
   
     </Container>
      </main>
     
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
