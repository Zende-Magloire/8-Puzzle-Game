'use strict';

window.onload = function () {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () =>
            elems_exchange(cell.closest('tr').rowIndex, cell.cellIndex));
    });
}

function elems_exchange(i, j) {
    const table = document.querySelector('table');

    //what was pressed? - innerHTML
    const val1 = table.rows[i].cells[j].innerHTML;

    //find empty cell
    let empty = isEmpty(table);

    //what to switch with
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

    //if above/below (i+/-1) empty, switch vertical
    if (b < table.rows.length) {
        if (below === empty) {
            const val2 = table.rows[b].cells[j].innerHTML;
            table.rows[i].cells[j].innerHTML = val2.toString();
            table.rows[b].cells[j].innerHTML = val1.toString();
        }
    }
    if (a >= 0) {
        if (above === empty) {
            const val2 = table.rows[a].cells[j].innerHTML;
            table.rows[i].cells[j].innerHTML = val2.toString();
            table.rows[a].cells[j].innerHTML = val1.toString();
        }
    }
    // if right/left (j+/-1) empty, switch horizontal
    if (r <= 2) {
        if (right === empty) {
            const val2 = table.rows[i].cells[r].innerHTML;
            table.rows[i].cells[j].innerHTML = val2.toString();
            table.rows[i].cells[r].innerHTML = val1.toString();
        }
    }
    if (l >= 0) {
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
    if (solved(table)) {
        //you win
        var text = document.getElementById("h2");
        text.innerHTML = "You win!"
        text.style.color = "#d87093";
        text.style.border = "2px dotted black";
    }
}

//find empty cell
function isEmpty(table) {
    let valE = " ";
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows.length; j++) {
            if (table.rows[i].cells[j].innerHTML === valE) {
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
        return true;
    else
        return false;
}


//scrabble the puzzle
const btn = document.querySelector("button");
btn.addEventListener("click", scrabble);

function scrabble() {
    const table = document.querySelector('table');
    var text = document.getElementById("h2");
    text.innerHTML = "You are in the game!"
    text.style.color = "#808080";
    text.style.border = "2px dotted pink";
    btn.innerHTML = "New Scramble"

    let rand = 0;
    let count = 0;

    while (count <= 35) {
        //find empty cell
        let empty = isEmpty(table);
        let i = parseInt(empty[0]);
        let j = parseInt(empty[3]);
        const val1 = table.rows[i].cells[j].innerHTML;

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
        rand = Math.floor(Math.random() * (5 - 1) + 1);;

        //based on the number, swap tile above, below, left or right 35x
        if (rand == 1) {
            if (b < table.rows.length) {
                const val2 = table.rows[b].cells[j].innerHTML;
                table.rows[i].cells[j].innerHTML = val2.toString();
                table.rows[b].cells[j].innerHTML = val1.toString();
                count++;
            }
            else {
                count++;
            }
        }
        else if (rand == 2) {
            if (a >= 0) {
                const val2 = table.rows[a].cells[j].innerHTML;
                table.rows[i].cells[j].innerHTML = val2.toString();
                table.rows[a].cells[j].innerHTML = val1.toString();
                count++;
            }
            else {
                count++;
            }
        }
        else if (rand == 3) {
            if (r <= 2) {
                const val2 = table.rows[i].cells[r].innerHTML;
                table.rows[i].cells[j].innerHTML = val2.toString();
                table.rows[i].cells[r].innerHTML = val1.toString();
                count++;
            }
            else {
                count++;
            }
        }
        else if (rand == 4) {
            if (l >= 0) {
                const val2 = table.rows[i].cells[l].innerHTML;
                table.rows[i].cells[j].innerHTML = val2.toString();
                table.rows[i].cells[l].innerHTML = val1.toString();
                count++;
            }
            else {
                count++;
            }
        }
    }

    if (solved(table)) {
        var text = document.getElementById("h2");
        text.innerHTML = "You win!"
        text.style.color = "#d87093";
        text.style.border = "2px dotted black";
    }
}



