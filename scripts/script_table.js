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

    //find empty cell
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; i < table.rows[i].cells; j++)
            if (table.rows[i].cells[j].innerHTML == " ")
                var empty = table.rows[i].cells[j];
        console.log("empty cell" + empty)
    }

    //is the empty cell around cell that was clicked
    console.log(`i = ${i}, j = ${j}`)
    const val1 = table.rows[i].cells[j].innerHTML;
    var pos1 = table.rows[i].cells[j];
    console.log(`pos1 = ${pos1}`)

    //TELL ME IF I CLICK THE EMPTY ONE
    console.log(`val1 = ${val1}`)
    if (val1.toString == 2) {
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
    let a = i - 1;
    let b = i + 1;
    let r = i + 1;
    let l = i - 1;
    if (table.rows[i + 1].cells[j].innerHTML == " ") {
        const val2 = table.rows[b].cells[j].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[b].cells[j].innerHTML = val1.toString();
    }
    else if (table.rows[i - 1].cells[j].innerHTML == " ") {
        const val2 = table.rows[a].cells[j].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[a].cells[j].innerHTML = val1.toString();
    }

    //else if right/left (j+/-1) empty, switch vertical
    else if (table.rows[i].cells[j + 1].innerHTML == " ") {
        const val2 = table.rows[i].cells[r].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[i].cells[r].innerHTML = val1.toString();
    }
    else if (table.rows[i].cells[j - 1].innerHTML == " ") {
        const val2 = table.rows[i].cells[l].innerHTML;
        table.rows[i].cells[j].innerHTML = val2.toString();
        table.rows[i].cells[l].innerHTML = val1.toString();
    }


    //if both i and j differ by 1, do nothing
    //if only one difference, switch
}




