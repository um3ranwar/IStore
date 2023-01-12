
const Cart =({cartItems ,handleAddProduct ,handleRemoveProduct}) =>{
const totalPrice =cartItems.reduce((price ,item) => price + item.quantity *item.price ,0);
return (
<div className="cart-items">
<div className="cart-items-header"> Cart Items</div>
{cartItems.length === 0 && (
  <div>
<h1> Currently Cart is Empty</h1>
  </div>
)}
<div class="rowww">
<div class="row">

{cartItems.map((item)=>(
  <div class=" col-lg-6 col-md-6 col-sm-6 elementss zoom ">
    <div class="container11111">
    <img class="iphoness" src={item.image}  />
  <h5 >{item.name}</h5>
  <p Style=" margin-bottom:0;"> ${item.price}</p>
  <p Style=" margin-top:0; margin-bottom:0;">{item.quantity}</p>
  <div className="cart-items-function">
  <button className="cart-items-add" onClick={() =>handleAddProduct(item)}>+</button>
  <button className="cart-items-remove" onClick={() =>handleRemoveProduct(item)}>-</button>
  </div>
  </div>
  </div>
)
)}
</div>
</div>
  <h1>Sub total : ${totalPrice}</h1>
  {totalPrice !== 0 ? <div><button Style="width:186px;" class=" btn btn-dark">Check Out</button></div> : null}
</div>

);
};

export default Cart;
