import {calculateTotal} from './functions'
import {cart} from './data'

const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

for(let i = 0; i < 3; i++){
    let product = cart[i].product;
    let price = product.price;
    let quantity = cart[i].quantity;
    let total = calculateTotal(price, quantity);
    console.log(total)
}