"use strict";


// window.addEventListener("load", function() {
//    var cartForm = document.forms.cart;
   
   
//    calcCart();
   
//    cartForm.elements.modelQty.onchange = calcCart;
   

//    var shippingOptions = document.querySelectorAll('input[name="shipping"]');
//    for (var i = 0; i < shippingOptions.length; i++) {
//       shippingOptions[i].onclick = calcCart;
//    } 
   
  
// });

// window.addEventListener("load", function() {
//    var cartFormtwo = document.forms.carttwo;
   
//    calcCarttwo();
   
//    cartFormtwo.elements.modelQtytwo.onchange = calcCarttwo;

//    var shippingOptionstwo = document.querySelectorAll('input[name="shippingtwo"]');
//    for (var i = 0; i < shippingOptionstwo.length; i++) {
//       shippingOptionstwo[i].onclick = calcCarttwo;
//    }
  
// });





// function calcCart() {
//    var cartForm = document.forms.cart;
   
   
//    var mCost = cartForm.elements.modelCost.value;
//    var qIndex = cartForm.elements.modelQty.selectedIndex;
//    var quantity = cartForm.elements.modelQty[qIndex].value;
   
  
//     var orderCost = mCost*quantity;
//     cartForm.elements.orderCost.value = formatUSCurrency(orderCost);
 
    
//     var shipCost = document.querySelector('input[name="shipping"]:checked').value*quantity;
//     cartForm.elements.shippingCost.value = formatNumber(shipCost, 2);
    
    
//     cartForm.elements.subTotal.value = formatNumber(orderCost + shipCost, 2);
    
    
//     var salesTax = 0.05*(orderCost + shipCost);
//     cartForm.elements.salesTax.value = formatNumber(salesTax, 2);
    
    
//     var cartTotal = orderCost + shipCost + salesTax;
//     cartForm.elements.cartTotal.value = formatUSCurrency(cartTotal);
    
    
//     cartForm.elements.shippingType.value = 
//        document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;

   
// }


// function calcCarttwo() {
//    var cartFormtwo = document.forms.carttwo;
   
   
//    var mCosttwo = cartFormtwo.elements.modelCosttwo.value;
//    var qIndextwo = cartFormtwo.elements.modelQtytwo.selectedIndex;
//    var quantitytwo = cartFormtwo.elements.modelQtytwo[qIndextwo].value;
   
    
//    var orderCosttwo = mCosttwo*quantitytwo;
//    cartFormtwo.elements.orderCosttwo.value = formatUSCurrency(orderCosttwo);

   
//    var shipCosttwo = document.querySelector('input[name="shippingtwo"]:checked').value*quantitytwo;
//    cartFormtwo.elements.shippingCosttwo.value = formatNumber(shipCosttwo, 2);
   
   
//    cartFormtwo.elements.subTotaltwo.value = formatNumber(orderCosttwo + shipCosttwo, 2);
   
   
//    var salesTaxtwo = 0.05*(orderCosttwo + shipCosttwo);
//    cartFormtwo.elements.salesTaxtwo.value = formatNumber(salesTaxtwo, 2);
   
   
//    var cartTotaltwo = orderCosttwo + shipCosttwo + salesTaxtwo;
//    cartFormtwo.elements.cartTotaltwo.value = formatUSCurrency(cartTotaltwo);
   
   
//    cartFormtwo.elements.shippingTypetwo.value = 
//       document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
// }

window.addEventListener("load",function (){
  
   /* calcCart2(); */
   var cart = document.forms.cart;
   cart.elements.pastries.focus();
   /* var cart2 = document.forms.cart; */
   calcCart();
   /* cart2.elements.foodQty2.onchange = calcCart2; */
   cart.elements.pastries.onchange = calcCart;
   cart.elements.foodQty.onchange = calcCart;
   cart.elements.pastries2.onchange = calcCart;
   cart.elements.foodQty2.onchange = calcCart;
   var shippingOptions = document.querySelectorAll('input[name="shipping"]');
   for (var i = 0; i < shippingOptions.length; i++){
       shippingOptions[i].onclick = calcCart;
   }
 
 });
 
 function calcCart(){
   var cart = document.forms.cart;
   var fIndex = cart.elements.pastries.selectedIndex;
   var fCost = cart.elements.pastries.options[fIndex].value;
   var qIndex = cart.elements.foodQty.selectedIndex;
   var quantity = cart.elements.foodQty[qIndex].value;
   var foodCost = fCost*quantity;
   cart.elements.foodCost.value = formatUSCurrency(foodCost);
   
 
   var cart2 = document.forms.cart;
   var fIndex2 = cart.elements.pastries2.selectedIndex;
   var fCost2 = cart.elements.pastries2.options[fIndex2].value;
   var qIndex2 = cart.elements.foodQty2.selectedIndex;
   var quantity2 = cart2.elements.foodQty2[qIndex2].value;
   var foodCost2 = fCost2*quantity2;
   cart2.elements.foodCost2.value = formatUSCurrency(foodCost2);
 
   /* if(cart.elements.foodCost2.value > 0){
     var shipCost = document.querySelector('input[name="shipping"]:checked').value*2*quantity;
   cart.elements.shippingCost.value = formatNumber(shipCost);
   cart.elements.subTotal.value = formatNumber(orderCost+orderCost2+shipCost, 2);
 
   var salesTax = 0.08*(orderCost+orderCost2+shipCost);
   cart.elements.salesTax.value = formatNumber(salesTax,2);
   cart.elements.cartTotal.value = formatUSCurrency(orderCost+orderCost2+shipCost+salesTax); */
 
   if(cart.elements.foodQty2[qIndex2].value > 0){
     var shipCost = document.querySelector('input[name="shipping"]:checked').value*quantity+ document.querySelector('input[name="shipping"]:checked').value*quantity2;
     cart.elements.shippingCost.value = formatNumber(shipCost,2);
     cart.elements.subTotal.value = formatNumber(foodCost+foodCost2+shipCost, 2);
   
     cart.elements.salesTax.value = formatNumber(0.08 * (cart.elements.subTotal.value),2);
     /* var salesTax = 0.08*(orderCost+shipCost); */
     var total = (foodCost+shipCost+foodCost2*1) + 0.08 * (foodCost+shipCost+foodCost2*1);
     /* cart.elements.salesTax.value = formatNumber(salesTax,2); */
     cart.elements.cartTotal.value = formatUSCurrency(total);
     cart.elements.foodName.value = cart.elements.pastries.options[fIndex].text;
     cart2.elements.foodName2.value = cart.elements.pastries2.options[fIndex2].text;
     /* cart.elements.cartTotal.value = formatUSCurrency(orderCost+shipCost+salesTax); */
     cart.elements.shippingType.value = document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
     cart2.elements.shippingType.value = document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
 
   }else{
   
     var shipCost = document.querySelector('input[name="shipping"]:checked').value*quantity;
     cart.elements.shippingCost.value = formatNumber(shipCost,2);
     cart.elements.subTotal.value = formatNumber(foodCost+shipCost, 2);
   
     cart.elements.salesTax.value = formatNumber((0.08 * (foodCost+shipCost)),2);
     /* var salesTax = 0.08*(orderCost+shipCost); */
     var total = (foodCost+shipCost*1) + 0.08 * (foodCost+shipCost*1);
     /* cart.elements.salesTax.value = formatNumber(salesTax,2); */
     cart.elements.cartTotal.value = formatUSCurrency(total);
     cart.elements.foodName.value = cart.elements.pastries.options[fIndex].text;
     /* cart.elements.cartTotal.value = formatUSCurrency(orderCost+shipCost+salesTax); */
     cart.elements.shippingType.value = document.querySelector('input[name="shipping"]:checked').nextSibling.nodeValue;
   }
   
   
 }










function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}


function formatNumber(val, decimals) {
   return val.toLocaleString(undefined, {minimumFractionDigits: decimals, 
                                         maximumFractionDigits: decimals});
}

function formatUSCurrency(val) {
   return val.toLocaleString('en-US', {style: "currency", currency: "USD"} );
}