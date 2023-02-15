'use strict';

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

    //find empty cell
    let empty = isEmpty(table);

    //testing stuff
    //console.log(`i = ${i}, j = ${j}`)
    //valE = " "
    // console.log(val1 === valE)
    //position of what was pressed
    //var pos1 = `${i} , ${j}`;
    //console.log(`pos1 = ${pos1}`)
    console.log(`val1 = ${val1}`)
    console.log(empty)

    //original code
    //  let k = j + 1;
    //  let numRows = table.rows.length; // not used, but this gets num rows
    //  if (k > table.rows[i].cells.length - 1) {
    //    k = 0;
    // }

    //const val2 = table.rows[i].cells[k].innerHTML;
    //console.log(`val2 = ${val2}`)

    //what to switch with
    //above
    let a = i - 1;
    let above = `${a}, ${j}`;
    // console.log(`above= ${above}`);

    //below
    let b = i + 1;
    let below = `${b}, ${j}`;
    //console.log(`below= ${below}`);

    //right
    let r = j + 1;
    let right = `${i}, ${r}`;
    //console.log(`right= ${right}`);

    //left
    let l = j - 1;
    let left = `${i}, ${l}`;
    //console.log(`left= ${left}`);

    //if above/below (i+/-1) empty, switch vertical
    if (b < table.rows.length) {
        //console.log("yes");
        //  console.log(`below: ${table.rows[b].cells[j].innerHTML}`)
        // if (table.rows[b].cells[j].innerHTML === " ")
        if (below === empty) {
            const val2 = table.rows[b].cells[j].innerHTML;
            table.rows[i].cells[j].innerHTML = val2.toString();
            table.rows[b].cells[j].innerHTML = val1.toString();
        }
    }
    if (a >= 0) {
        // console.log("yes");
        //console.log(`above: ${table.rows[a].cells[j].innerHTML}`)
        // if (table.rows[a].cells[j].innerHTML === " ")
        if (above === empty) {
            const val2 = table.rows[a].cells[j].innerHTML;
            table.rows[i].cells[j].innerHTML = val2.toString();
            table.rows[a].cells[j].innerHTML = val1.toString();
        }
    }

    // if right/left (j+/-1) empty, switch horizontal
    if (r <= 2) {
        // console.log("yes");
        //console.log(`right: ${table.rows[i].cells[r].innerHTML}`)
        // if (table.rows[i].cells[r].innerHTML === " ")
        if (right === empty) {
            const val2 = table.rows[i].cells[r].innerHTML;
            table.rows[i].cells[j].innerHTML = val2.toString();
            table.rows[i].cells[r].innerHTML = val1.toString();
        }
    }
    if (l >= 0) {
        //  console.log("yes");
        // console.log(`left: ${table.rows[i].cells[l].innerHTML}`)
        //if (table.rows[i].cells[l].innerHTML === " ")
        if (left === empty) {
            const val2 = table.rows[i].cells[l].innerHTML;
            table.rows[i].cells[j].innerHTML = val2.toString();
            table.rows[i].cells[l].innerHTML = val1.toString();
        }
    }
    else {
        return
    }

    //is it solved?
    if (solved(table))
        alert("You won!");
}

//find empty cell
function isEmpty(table) {
    //const table = document.querySelectorAll('table');
    let valE = " ";
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows.length; j++) {
            if (table.rows[i].cells[j].innerHTML === valE) {
                // let empty = `${i} , ${j}`;
                //console.log(`${i} , ${j}`);
                return `${i}, ${j}`;
            }
        }
    }
}

//check if solved
function solved(table) {
    if (
        table.rows[0].cells[0].innerHTML === "1" &&
        table.rows[0].cells[1].innerHTML === "2" &&
        table.rows[0].cells[2].innerHTML === "3" &&
        table.rows[1].cells[2].innerHTML === "4" &&
        table.rows[2].cells[2].innerHTML === "5" &&
        table.rows[2].cells[1].innerHTML === "6" &&
        table.rows[2].cells[0].innerHTML === "7" &&
        table.rows[1].cells[0].innerHTML === "8" &&
        table.rows[1].cells[1].innerHTML === " "
    )
        //chnage h2 to you win
        return true;
    else
        return false;
}


//scrabble the puzzle
const btn = document.querySelector("button");
btn.addEventListener("click", scrabble);
//when you hit play, btn text change to new scramble

function scrabble() {
    const table = document.querySelector('table');

    let rand = 0;
    let count = 0;
    while (count <= 35) {
        //find empty cell
        let empty = isEmpty(table);
        let i = empty[0];
        let j = empty[3];
        const val1 = table.rows[i].cells[j].innerHTML;
        console.log(`val1 = ${val1}`);

        //find surrounding cells
        //above
        let a = i - 1;
        let above = `${a}, ${j}`;
        //below
        let b = i + 1;
        let below = `${b}, ${j}`;
        //right
        let r = j + 1;
        let right = `${i}, ${r}`;
        //left
        let l = j - 1;
        let left = `${i}, ${l}`;

        //choose a random number
        rand = Math.floor(Math.random() * (4 - 0 + 1) + 0);
        console.log(`rand = ${rand}`)

        //based on the number, swap tile above, below, left or right 35x
        if (rand == 1) {
            if (b < table.rows.length) {
                const val2 = table.rows[b].cells[j].innerHTML;
                table.rows[i].cells[j].innerHTML = val2.toString();
                table.rows[b].cells[j].innerHTML = val1.toString();
            }
        }
        else if (rand == 2) {
            if (a >= 0) {
                const val2 = table.rows[a].cells[j].innerHTML;
                table.rows[i].cells[j].innerHTML = val2.toString();
                table.rows[a].cells[j].innerHTML = val1.toString();
            }
        }
        else if (rand == 3) {
            if (r <= 2) {
                const val2 = table.rows[i].cells[r].innerHTML;
                table.rows[i].cells[j].innerHTML = val2.toString();
                table.rows[i].cells[r].innerHTML = val1.toString();
            }
        }
        else if (rand == 4) {
            if (l >= 0) {

                const val2 = table.rows[i].cells[l].innerHTML;
                table.rows[i].cells[j].innerHTML = val2.toString();
                table.rows[i].cells[l].innerHTML = val1.toString();
            }
        }
        count++
    }
}



