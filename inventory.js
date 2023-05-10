function totalCalc() {
  // Retrieve input element
  var inputs = document.getElementsByClassName("item-weight");
  
  // Add event listener for change to input element
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function(event) {
      // Calculate the sum of their values
      var sum = 0;
      for (var i = 0; i < inputs.length; i++) {
        sum += parseFloat(inputs[i].value);
      }
  
      // Update the result element with the sum
      var resultElement = document.getElementById("total-weight");
      resultElement.textContent = sum;
    });
  }
};
////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  totalCalc();

  // Calculate coin conversions
  const copper = document.getElementById("cp-input");
  const silver = document.getElementById("sp-input");
  const electrum = document.getElementById("ep-input");
  const gold = document.getElementById("gp-input");
  const platinum = document.getElementById("pp-input");
  
  const cp_cp = document.getElementById("cp-cp");
  const cp_sp = document.getElementById("cp-sp");
  const cp_ep = document.getElementById("cp-ep");
  const cp_gp = document.getElementById("cp-gp");
  const cp_pp = document.getElementById("cp-pp");
  const sp_cp = document.getElementById("sp-cp");
  const sp_sp = document.getElementById("sp-sp");
  const sp_ep = document.getElementById("sp-ep");
  const sp_gp = document.getElementById("sp-gp");
  const sp_pp = document.getElementById("sp-pp");
  const ep_cp = document.getElementById("ep-cp");
  const ep_sp = document.getElementById("ep-sp");
  const ep_ep = document.getElementById("ep-ep");
  const ep_gp = document.getElementById("ep-gp");
  const ep_pp = document.getElementById("ep-pp");
  const gp_cp = document.getElementById("gp-cp");
  const gp_sp = document.getElementById("gp-sp");
  const gp_ep = document.getElementById("gp-ep");
  const gp_gp = document.getElementById("gp-gp");
  const gp_pp = document.getElementById("gp-pp");
  const pp_cp = document.getElementById("pp-cp");
  const pp_sp = document.getElementById("pp-sp");
  const pp_ep = document.getElementById("pp-ep");
  const pp_gp = document.getElementById("pp-gp");
  const pp_pp = document.getElementById("pp-pp");
  
  copper.addEventListener("input", wealthCalc)
  silver.addEventListener("input", wealthCalc)
  electrum.addEventListener("input", wealthCalc)
  gold.addEventListener("input", wealthCalc)
  platinum.addEventListener("input", wealthCalc)
  
  function wealthCalc() {
    cp_cp.innerHTML = copper.value * 1;
    cp_sp.innerHTML = copper.value * 1/10;
    cp_ep.innerHTML = copper.value * 1/50;
    cp_gp.innerHTML = copper.value * 1/100;
    cp_pp.innerHTML = copper.value * 1/1000;
    sp_cp.innerHTML = silver.value * 10;
    sp_sp.innerHTML = silver.value * 1;
    sp_ep.innerHTML = silver.value * 1/5;
    sp_gp.innerHTML = silver.value * 1/10;
    sp_pp.innerHTML = silver.value * 1/100;
    ep_cp.innerHTML = electrum.value * 50;
    ep_sp.innerHTML = electrum.value * 5;
    ep_ep.innerHTML = electrum.value * 1;
    ep_gp.innerHTML = electrum.value * 1/2;
    ep_pp.innerHTML = electrum.value * 1/20;
    gp_cp.innerHTML = gold.value * 100;
    gp_sp.innerHTML = gold.value * 10;
    gp_ep.innerHTML = gold.value * 2;
    gp_gp.innerHTML = gold.value * 1;
    gp_pp.innerHTML = gold.value * 1/10;
    pp_cp.innerHTML = platinum.value * 1000;
    pp_sp.innerHTML = platinum.value * 100;
    pp_ep.innerHTML = platinum.value * 20;
    pp_gp.innerHTML = platinum.value * 10;
    pp_pp.innerHTML = platinum.value * 1;
  }
});
///////////////////////////////////////////////////////////////////////////////////////////
// Add deletable row
function addRow(tableId) {
  // Get the table element
  var table = document.getElementById(tableId);

  // Determine the number of columns in the table
  var columnCount = table.rows[0].cells.length;

  // Add a new row before the last row
  var newRow = table.insertRow(table.rows.length - 1);

  // Add cells to the new row
  for (var i = 0; i < columnCount; i++) {
    if (i == 0) {
      var cellText = "<td><input class='item-name' type='text'></td>"
    } else if (i == 1) {
      var cellText = "<td><input class='item-cost' type='text'></td>"
    } else if (i == 2) {
      var cellText = "<td><input class='item-dmg-ac' type='text'></td>"
    } else if (i == 3) {
      var cellText = "<td><input class='item-weight' type='number' value='0'></td>"
    } else {
      var cellText = "<td><input class='item-properties' type='text'></td>"
    }
    var newCell = newRow.insertCell(i);
    newCell.innerHTML = cellText;
    totalCalc();
  }

  // Create a button to delete the new row
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
    // Retrieve the weight value of the deleted row
    var weightValue = parseFloat(newRow.getElementsByClassName("item-weight")[0].value);
    
    // Subtract the weight value from the total
    var resultElement = document.getElementById("total-weight");
    var sum = parseFloat(resultElement.textContent) - weightValue;
    resultElement.textContent = sum;

    // Delete the row
    table.deleteRow(newRow.rowIndex);
  };

  // Add the delete button to the new row
  var deleteCell = newRow.insertCell(columnCount);
  deleteCell.appendChild(deleteButton);
};
//////////////////////////////////////////////////////////////////////////////////////
console.log()