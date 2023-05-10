// Deselectable radio buttons /////////////////////////////////////////////////////////////
function deselect(id) {
    const radioButton = document.getElementById(id);
    radioButton.addEventListener("click", () => {
      if (radioButton.checked) {
        radioButton.checked = false;
      } else {
        radioButton.checked = true;
      }
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////

// Add deletable row
function addRow(tableId) {
    // Get the table element
    var table = document.getElementById(tableId);
  
    // Determine the number of columns in the table
    var columnCount = table.rows[0].cells.length;
  
    // Add a new row before the last row
    var newRow = table.insertRow(table.rows.length);
  
    // Add cells to the new row
    for (var i = 0; i < columnCount; i++) {
      var newCell = newRow.insertCell(i);
      newCell.innerHTML = "<input class='weapon-field' type='text'>";
    }

    // Create a button to delete the new row
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function() {
    // Delete the row
    table.deleteRow(newRow.rowIndex);
  };

  // Add the delete button to the new row
  var deleteCell = newRow.insertCell(columnCount);
  deleteCell.appendChild(deleteButton);
};