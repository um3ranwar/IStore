 import 'bootstrap/dist/css/bootstrap.min.css';
 import React, {useState} from "react";
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Navigationbar from "./header";
import Home from "./Home";
import ContactForm from "./Contact";
import RegistrationForm from "./SignUp";
import LogIn from "./LogIn";
import Footer from "./footer";
import Apple from "./Apple";
import Sony from "./Sony";
import Oneplus from "./Oneplus";
import Nokia from "./Nokia";
import Vivo from "./Vivo";
import Oppo from "./Oppo";
import Cart from "./Cart";
import data from "./data";

function App() {
const {productItems} = data;
const [cartItems, setCartItems] = useState([]);


const handleAddProduct = (product) =>{
const ProductExist = cartItems.find((item) => item.id === product.id);
if (ProductExist){
setCartItems(cartItems.map((item) => item.id === product.id ?
{...ProductExist, quantity: ProductExist.quantity +1}:item ));
}
else{
  setCartItems([...cartItems,{...product,quantity: 1 }]);
}
};

const handleRemoveProduct = (product) =>{
const ProductExist = cartItems.find((item) => item.id === product.id);
if(ProductExist.quantity === 1){
setCartItems(cartItems.filter((item) => item.id !== product.id));
  }
  else{
    setCartItems(cartItems.map((item) => item.id === product.id ?
    {...ProductExist, quantity: ProductExist.quantity - 1}:item ));
  }
}


  return (
    <div className="App">
        <Router>
            <Navigationbar cartItems={cartItems}/>
            <div className="pages">
            <Switch>
                <Route exact path='/'> <Home /> </Route>
                <Route path='/Contact'><ContactForm/></Route>
                <Route path='/SignUp'><RegistrationForm/></Route>
                <Route path='/LogIn'><LogIn/></Route>
                <Route path='/Apple'><Apple productItems={productItems} handleAddProduct={handleAddProduct}/></Route>
                <Route path='/Oppo' ><Oppo productItems={productItems}  handleAddProduct={handleAddProduct}/></Route>
                <Route path='/Sony' ><Sony productItems={productItems}  handleAddProduct={handleAddProduct}/></Route>
                <Route path='/Oneplus'><Oneplus productItems={productItems} handleAddProduct={handleAddProduct}/></Route>
                <Route path='/Vivo'><Vivo productItems={productItems} handleAddProduct={handleAddProduct}/></Route>
                <Route path='/Nokia'><Nokia productItems={productItems} handleAddProduct={handleAddProduct}/></Route>
                <Route path='/Cart'>
                <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                />

                </Route>
            </Switch>
            </div>
           <Footer />
        </Router>
    </div>
  );
}

export default App;
