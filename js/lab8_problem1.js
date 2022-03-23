const tax_rate = .10; //prompt('Enter tax rate (0.10)');
const shipping_threshold = 300; //prompt('Enter shipping threshold (1000)');
//TODO: activate prompt

function loadTable(table){
    const tableBody = table.querySelector("tbody");

    //Clear table to use dynamic instead
    tableBody.innerHTML = "<tr></tr>";

    //Fill in rows
    let subtotal = 0;
    for(let i = 0; i < 3; i++){
        const row = document.createElement("tr");               //Create row
        const img = document.createElement('img');              //Create image
        img.src = "images/"+cart[i].product.filename;                    //Add image
        row.appendChild(img);

        //Create title, quantity and price
        createContent(row, cart[i].product.title);
        createContent(row, cart[i].quantity);
        createContent(row, cart[i].product.price);

        //Create total
        let total = parseInt(calculateTotal(cart[i].quantity, cart[i].product.price));
        subtotal += total;
        total = moneyFormat(total)
        createContent(row, total);

        tableBody.append(row);                                          //Add row to body
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