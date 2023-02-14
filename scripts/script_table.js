"use strict";

window.onload = function () {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () =>
            elems_exchange(cell.closest('tr').rowIndex, cell.cellIndex));
    });
}

/*
function elems_exchange(i, j) {
    const table = document.querySelector('table');
    const val1 = table.rows[i].cells[j].innerHTML;

    let k = j + 1;
    let numRows = table.rows.length; // not used, but this gets num rows
    if (k > table.rows[i].cells.length - 1) {
        k = 0;
    }
    const val2 = table.rows[i].cells[k].innerHTML;

    table.rows[i].cells[j].innerHTML = val2.toString();
    table.rows[i].cells[k].innerHTML = val1.toString();
}
*/

function elems_exchange(i, j) {
    const table = document.querySelector('table');

    //what was pressed? - innerHTML
    const val1 = table.rows[i].cells[j].innerHTML;
    console.log(`val1 = ${val1}`)
    //position of what was pressed
    var pos1 = `${i} , ${j}`;
    console.log(`pos1 = ${pos1}`)

    //find empty cell
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; i < table.rows[i].cells; j++)
            if (table.rows[i].cells[j].innerHTML.toString == " ")
                var empty = `${i} , ${j}`;
        console.log("empty cell: " + empty)
    }

    //testing stuff
    console.log(`i = ${i}, j = ${j}`)

    //TELL ME IF I CLICK THE EMPTY ONE
    if (pos1 === empty) {
        console.log(`true`)
    }

    //original code
    //  let k = j + 1;
    //  let numRows = table.rows.length; // not used, but this gets num rows
    //  if (k > table.rows[i].cells.length - 1) {
    //    k = 0;
    // }

    //const val2 = table.rows[i].cells[k].innerHTML;
    //console.log(`val2 = ${val2}`)

    //if above/below (i+/-1) empty, switch horizontal
    //above
    let a = i - 1;
    if (a >= 0 && a < table.rows.length) {
        let above = table.rows[a].cells[j];
    }
    //below
    let b = i + 1;
    if (b < table.rows.length) {
        let below = table.rows[b].cells[j];
    }
    //right
    let r = j + 1;
    if (r < table.rows.cells.length) {
        let right = table.rows[r].cells[j];
    }
    //left
    let l = j - 1;
    if (r >= 0 && r < table.rows.cells.length) {
        let left = table.rows[l].cells[j];
    }

    if (below === empty) {
        const val2 = table.rows[b].cells[j].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[b].cells[j].innerHTML = val1.toString();
    }
    else if (above === empty) {
        const val2 = table.rows[a].cells[j].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[a].cells[j].innerHTML = val1.toString();
    }

    //else if right/left (j+/-1) empty, switch vertical
    else if (right === empty) {
        const val2 = table.rows[i].cells[r].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[i].cells[r].innerHTML = val1.toString();
    }
    else if (table.rows[i].cells[j - 1].innerHTML == " " && l < 0) {
        const val2 = table.rows[i].cells[l].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[i].cells[l].innerHTML = val1.toString();
    }
    else {
        return
    }
}




