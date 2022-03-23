const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');
let tableBody;

/*
 * Function loads the table in the following manner:
 * First, get rid of hardcoded rows. Then loop over the cart content and for each item create
 * a row displaying the item's information.
 * Then, calculate the subtotal, tax, shipping and total
 */
function loadTable(table){
    tableBody = table.querySelector("tbody");
    //Remove hard coded rows
    let hardCodedRows = table.getElementsByTagName("tr");
    hardCodedRows[1].remove();
    hardCodedRows[1].remove();
    hardCodedRows[1].remove();

    let subtotal = 0;                       //Keep track of subtotal
    //Fill in rows. I am creating elements instead of editing so that it can handle more rows if cart has more items.
    //I am going in reverse because outputCartRow will prepend them to go before the existing bottom cells
    //I wanted to keep the bottom rows to practice with both creating DOM elements and edit existing ones
    for(let i = cart.length-1; i >= 0; i--){
        //Calculate amount for items
        let amount = parseInt(calculateTotal(cart[i].quantity, cart[i].product.price));
        subtotal += amount;
        amount = moneyFormat(amount)
        outputCartRow(cart[i], amount);     //Create row
    }

    //Calculate and show subtotal, tax, shipping and grand total
    let tableRows = document.getElementsByClassName("totals");
    const tax = tax_rate*subtotal;
    const shipping = subtotal > shipping_threshold ? 0 : 40;
    updateTotalsRow(tableRows[0], subtotal);
    updateTotalsRow(tableRows[1],  tax);
    updateTotalsRow(tableRows[2], shipping);
    updateTotalsRow(tableRows[3], (subtotal+tax+shipping));
}

//Call function loadTable to populate the table
loadTable(document.querySelector("table.table-fill"));
// or: loadTable(document.getElementsByClassName("table-fill")[0]);