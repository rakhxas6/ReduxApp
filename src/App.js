import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";
import Footer from "./containers/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing/>} />
          <Route path="/product/:productId" exact element={<ProductDetails/>} />
          <Route path="*">404 Not Found!</Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
