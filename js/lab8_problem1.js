const tax_rate = .10; //prompt('Enter tax rate (0.10)');
const shipping_threshold = 300; //prompt('Enter shipping threshold (1000)');
//TODO: activate prompt

function loadTable(table){
    const tableBody = table.querySelector("tbody");
    tableBody.innerHTML = "<tr></tr>";      //Clear table to use dynamic instead
    let subtotal = 0;                       //Keep track of subtotal

    //Fill in rows
    for(let i = 0; i < 3; i++){

        //Calculate amount for items
        let amount = parseInt(calculateTotal(cart[i].quantity, cart[i].product.price));
        subtotal += amount;
        amount = moneyFormat(amount)

        //Create row
        outputCartRow(tableBody, cart[i], amount);
    }

    //Calculate and show subtotal, tax, shipping and grand total
    addRow(tableBody,"totals", 4, "Subtotal", subtotal, false);                     //Show subtotal
    const tax = tax_rate*subtotal;
    addRow(tableBody,"totals", 4, "Tax", tax, false);                               //Show tax
    const shipping = subtotal > shipping_threshold ? 0 : 40;
    addRow(tableBody,"totals", 4, "Shipping", shipping, false);                     //Show shipping
    addRow(tableBody,"totals", 4, "Grand Total", subtotal+tax+shipping, true); //GrandTotal
}

loadTable(document.querySelector("table.table-fill"));