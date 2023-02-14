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
    let numRows = table.rows.length;
    //above
    let a = i - 1;
    var above;
    if (a >= 0) {
        let above = table.rows[a].cells[j];
    }
    //below
    let b = i + 1;
    var below;
    if (b < numRows) {
        let below = table.rows[b].cells[j];
    }
    //right
    let r = j + 1;
    var right;
    if (r < numRows) {
        let right = table.rows[r].cells[j];
    }
    //left
    let l = j - 1;
    var left;
    if (l >= 0) {
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

    //is it solved?
    if (solved(table)) {
        console.log("won")
    }
}

function solved(table) {
    if (
        table.rows[0].cells[0].innerHTML.toString == "1" &&
        table.rows[0].cells[1].innerHTML.toString == "2" &&
        table.rows[0].cells[2].innerHTML.toString == "3" &&
        table.rows[1].cells[3].innerHTML.toString == "4" &&
        table.rows[3].cells[3].innerHTML.toString == "5" &&
        table.rows[3].cells[2].innerHTML.toString == "6" &&
        table.rows[3].cells[0].innerHTML.toString == "7" &&
        table.rows[2].cells[0].innerHTML.toString == "8" &&
        table.rows[0].cells[0].innerHTML.toString == " "
    )
        return true;
}




