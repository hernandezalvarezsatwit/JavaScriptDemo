function loadTable(table){
    const tableBody = table.querySelector("tbody");

    //Clear table to use dynamic instead
    tableBody.innerHTML = "<tr></tr>";

    //Fill in rows
    let subtotal = 0;
    for(let i = 0; i < 3; i++){
        const row = document.createElement("tr");

        const img = document.createElement('img');
        img.src = "images/"+cart[i].product.filename;
        row.appendChild(img);

        createContent(row, cart[i].product.title);
        createContent(row, cart[i].quantity);
        createContent(row, cart[i].product.price);
        //createContent(row, cart[i].product.title);

        let total = parseInt(calculateTotal(cart[i].quantity, cart[i].product.price));
        subtotal += parseInt(total);
        total = moneyFormat(total)
        createContent(row, total);

        tableBody.append(row);
    }

    //Calculate and show subtotal, tax, shipping and grand total
    addRow(tableBody,"totals", 4, "Subtotal", subtotal, false);                     //Show subtotal
    const tax = tax_rate*subtotal;
    addRow(tableBody,"totals", 4, "Tax", tax, false);                               //Show tax
    const shipping = subtotal > shipping_threshold ? 0 : 40;
    addRow(tableBody,"totals", 4, "Shipping", shipping, false);                     //Show shipping
    addRow(tableBody,"totals", 4, "Grand Total", subtotal+tax+shipping, true); //GrandTotal
}

function createContent(row, text){
    const celElement = document.createElement("td");
    celElement.textContent = text;
    row.appendChild(celElement);
}


function addRow(tbody, classType, span, text, quantity, bold){
    const row = document.createElement("tr");
    row.classList.add(classType);
    const cell = document.createElement("td");
    cell.textContent = text;
    cell.colSpan = span;
    row.appendChild(cell);
    const cell1 = document.createElement("td");
    cell1.textContent = moneyFormat(quantity);
    row.appendChild(cell1);
    if(bold){
        cell1.classList.add("focus");
    }
    tbody.append(row);
}

function moneyFormat(number){
    return '$'+(number.toFixed(2));
}


loadTable(document.querySelector("table.table-fill"));