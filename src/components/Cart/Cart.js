import React from 'react';

const cart = (props) => {
  const cart = props.cart;
  // const totalPrice = cart.reduce((totalPrice,prd)=>totalPrice+prd.price,0)
  let total = 0;
  for(let i=0;i<cart.length;i++){
    const product = cart[i];
    total = total+product.price
  }
  let shipping = 0;
  if(total>35){
    shipping =0;
  }
  if(total>15){
    shipping =4.99;
  }
  else if(total>0){
    shipping = 12.66;
  }
  else if(total >0){
      shipping =12.45
  }
  const tax = (total/10).toFixed(2);
  const grandTotal = (total + shipping + Number(tax).toFixed(2));
  const formatNumber = num =>{
    const precision = num.toFixed(2);
    return Number(precision);
  }








  
  return (
    <div>
      <h1>Order Summary:</h1>
      <p>Items Ordered:{cart.length}</p>
      <p>Shipping Cost:{shipping}</p>
      <p>
      <p><small>Tax+Vat:{tax}</small></p>
        Total Price: {total + shipping +tax}
      </p>
    </div>
  );
};

export default cart;