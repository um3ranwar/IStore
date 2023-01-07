import React, { useState } from "react";
function Nokia({productItems,handleAddProduct}){

return(
<div class="iphonefurther">
<h1>Nokia</h1>
<div class="row">

{productItems.map((productItem) =>{

  return(
    <div class=" col-lg-3 col-md-6 col-sm-6 elementss zoom ">
      <div class="container111">
      <img class="iphoness" src={productItem.image}  />
    <h5>{productItem.name} </h5>
    <p>${productItem.price}</p>
    <button Style="width:186px;" onClick={() =>handleAddProduct(productItem)}  class=" btn btn-dark">Add to Cart</button>
    </div>
    </div>
    );
}


)}
</div>

</div>
);

};

export default Nokia;
