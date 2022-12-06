var submit = document.getElementById('submit');
submit.addEventListener("click", displayDetails);

var pick = document.getElementById('pick');
pick.addEventListener("click", winner);

var names = [];
var row = 1;

function displayDetails() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var amount = document.getElementById('amount').value;

    if (!id || !name || !amount) {
        alert("ቦክሱ ባዶ ነዉ፡፡");
        return;
    }

    var display = document.getElementById('display');
    var r = document.getElementById('display').rows.length - 1;
    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    

    cell1.innerHTML = id;
    cell2.innerHTML = name;
    cell3.innerHTML = amount;
    names[r] = name;
 
    row++;

}

function winner() {
    var rownum = document.getElementById('display').rows.length - 1;
    if (rownum != 0) {
        let luck = Math.floor(Math.random() * row) + 1;
        document.getElementById('display winner').innerHTML = names[luck - 1];
    
    }
}