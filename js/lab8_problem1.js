
const tax_rate = .10; //prompt('Enter tax rate (0.10)');
const shipping_threshold = 10   ; //= prompt('Enter shipping threshold (1000)');
//TODO: change back to prompt

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

function loop(){
    for (let i = 0; i < 3; i++) {
        let product = cart[i].product;
        let price = product.price;
        let quantity = cart[i].quantity;
        let total = calculateTotal(price, quantity);
        outputCartRow(product, total);
        console.log(total);
        console.log(product);
    }
}