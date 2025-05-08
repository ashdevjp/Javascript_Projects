import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';  
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/money.js';

export function renderPaymentSummary(){
<<<<<<< HEAD
   
=======
>>>>>>> 9593b05d9ef52c2b316d8af4a788fb469ec52a80
 let productPriceCents = 0;
 let shippingPriceCents = 0;

   cart.forEach((cartItem) => {
      const product = getProduct(cartItem.productId);
<<<<<<< HEAD
      productPriceCents +=  product.priceCents * cartItem.quantity;

      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceCents += deliveryOption.priceCents;

=======
      productPriceCents+=  product.priceCents * cartItem.quantity;

      const deliveryOption = getDeliveryOption(cartItem.deliveryoptionId);
      shippingPriceCents += deliveryOption.priceCents;
>>>>>>> 9593b05d9ef52c2b316d8af4a788fb469ec52a80
   });

   const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
   const taxCents = totalBeforeTaxCents * 0.1;
   const totalCents =totalBeforeTaxCents + taxCents; 
   
   
   const paymentSummaryHTML = `
      <div class="payment-summary-title">
      Order Summary
      </div>

      <div class="payment-summary-row">
         <div>Items (3):</div>
         <div class="payment-summary-money">
            $${formatCurrency(productPriceCents)}
            </div>
      </div>

      <div class="payment-summary-row">
         <div>Shipping &amp; handling:</div>
         <div class="payment-summary-money">
         $${formatCurrency(shippingPriceCents)}
         </div>
      </div>

      <div class="payment-summary-row subtotal-row">
         <div>Total before tax:</div>
         <div class="payment-summary-money">
         $${formatCurrency(totalBeforeTaxCents)}
         </div>
      </div>

      <div class="payment-summary-row">
       <div>Estimated tax (10%):</div>
         <div class="payment-summary-money">
         $${formatCurrency(taxCents)}
         </div>
      </div>

      <div class="payment-summary-row total-row">
         <div>Order total:</div>
         <div class="payment-summary-money">
         $${formatCurrency(totalCents)}
         </div>
      </div>

      <button class="place-order-button button-primary">
      Place your order
      </button>

      `;

<<<<<<< HEAD
      document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;


=======
      document.querySelector('.js-payment-summary')
      .innerHTML = paymentSummaryHTML;
>>>>>>> 9593b05d9ef52c2b316d8af4a788fb469ec52a80

      }