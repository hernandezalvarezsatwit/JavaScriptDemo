//Given a function calculate the total which is just quantity times price, also format to 2 decimals
function calculateTotal(quantity, price){
    return (quantity*price).toFixed(2);
}

//Given an item and a total populate a row
function outputCartRow(item, total){
    const row = document.createElement("tr");               //Create row
    const img = document.createElement('img');              //Create image
    img.src = "images/"+item.product.filename;                       //Add image
    row.appendChild(img);                                            //Add cell to row

    //Create title, quantity and price
    createContent(row, item.product.title);
    createContent(row, item.quantity);
    createContent(row, item.product.price);
    createContent(row, total);
    tableBody.prepend(row);                             //Prepending to the top of the table to keep bottom rows
}

//Create a cell with given text and append it to the given row
function createContent(row, text){
    const celElement = document.createElement("td");
    celElement.textContent = text;
    row.appendChild(celElement);
}

//Update existing cell to current amount
function updateTotalsRow(tableRow, amount) {
    let cells = tableRow.getElementsByTagName("td");
    cells[1].textContent = moneyFormat(amount);
}

//Format like money with $ sign and two decimals
function moneyFormat(number){
    return '$'+(number.toFixed(2));
}