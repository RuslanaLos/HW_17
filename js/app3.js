let table = document.createElement('table');
for (let a = 1; a <= 10; a++) {
    let row = document.createElement('tr');
    for (let b = 1; b <= 10; b++) {
        let cell = document.createElement('td');
        let num = (a - 1) * 10 + b;
        cell.innerText = num.toString();
        row.appendChild(cell);
    }
    table.appendChild(row);
}

document.body.appendChild(table);