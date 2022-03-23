/* define your functions here */
function calculateTotal(quantity, price){
    return (quantity*price).toFixed(2);
}

function outputCartRow(item, total){
    total.toFixed();
    document.write(item.title + " " +item.price+ " "+item.filename);
}

function createContent(row, text){
    const celElement = document.createElement("td");
    celElement.textContent = text;
    row.appendChild(celElement);
}

function addRow(tbody, classType, span, text, quantity, bold){
    const row = document.createElement("tr");
    //row.classList.add(classType);
    const cell = document.createElement("td");
    cell.textContent = text;
    cell.colSpan = span;
    row.appendChild(cell);
    const cell1 = document.createElement("td");
    cell1.textContent = moneyFormat(quantity);
    row.appendChild(cell1);
    bold ? cell1.classList.add("focus"): "";
    tbody.append(row);
}

function moneyFormat(number){
    return '$'+(number.toFixed(2));
}






        
