import { renderCheckoutHeader } from "./checkout/CheckoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";   
import { loadCart } from "../data/cart.js";

//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
   try {
      //throw 'fake error';

      await loadProductsFetch()

      await new Promise((resolve, reject) => {
      loadCart(() => {
         //reject ("fake Error ");
         resolve();
      });
   })

   } catch (error) {
      console.error("Unexpected error. Please try again later.");
   }




   renderCheckoutHeader();
   renderOrderSummary();
   renderPaymentSummary();

}
loadPage()

/*
Promise.all([
   loadProductsFetch(),
   new Promise((resolve) => {     loadCart(() => {
         resolve();
      });
   })
]).then(() => {

   renderCheckoutHeader();
   renderOrderSummary();
   renderPaymentSummary();
});
*/


/*
new Promise((resolve) => {
   
   loadProducts(() => {
      
      resolve();
   });   


}).then(() => {

   return new Promise((resolve) => {

      loadCart(() => {
         resolve();
   })


}).then(() => {
      renderCheckoutHeader();
      renderOrderSummary();
      renderPaymentSummary();
   });


})
*/

/*
loadProducts(() => {
   loadCart(() => {
     renderCheckoutHeader();
     renderOrderSummary();
     renderPaymentSummary();
 

   });
});
*/
