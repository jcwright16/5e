// Make spell table sortable and searchable //////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function() {
    // Initialize DataTable
    var table = $('#spell-table').DataTable({
      ordering: true,
      paging: true,
      pageLength: 7,
      lengthChange: false,
      info: false,
      columnDefs: [
        {
          orderable: false,
          targets: [3, 4, 5, 6, 7, 8]
        },
        {
          type: String,
          targets: [0, 1]
        },
        {
          type: Number,
          targets: [2]
        }
      ]
    });

    // Attach click event listener to save buttons
    $('#spell-table').on('click', '.save-btn', function() {
      // Iterate over each row in the table
      table.rows().every(function (rowIdx, tableLoop, rowLoop) {
        // Get the data array for this row
        var rowData = this.data();
        
        // Iterate over each column in the row
        $(this.node()).find('td').each(function (colIdx) {
          // Get the input element in this cell
          var inputElem = $(this).find('input');
          
          // If the cell contains an input element
          if (inputElem.length > 0) {
            // Update the data array with the input value
            rowData[colIdx] = inputElem.val();
          }
        });
        
        // Update the DataTable's data array with the new row data
        table.row(rowIdx).data(rowData);
      });

      // Redraw the DataTable
      table.draw();
    });
    
    // Attach click event listener to delete buttons
    $('#spell-table').on('click', '.delete-btn', function() {
      var row = $(this).closest('tr');
      table.row(row).remove().draw();
    });

    // Attach click event listener to add button
    $('#add-btn').on('click', function () {
      var row = $('<tr></tr>');
      row.append($('<td><input id="spell-name" type="text"></td>'));
      row.append($('<td><input id="spell-school" type="text"></td>'));
      row.append($('<td><input id="spell-level-input" type="number" min="0" max="9"></td>'));
      row.append($('<td><input id="spell-cast-time" type="text"></td>'));
      row.append($('<td><input id="spell-range" type="text"></td>'));
      row.append($('<td><input id="spell-components" type="text"></td>'));
      row.append($('<td><input id="spell-duration" type="text"></td>'));
      row.append($('<td><textarea id="spell-desc-input">A Description of the spell...</textarea></td>'));
      row.append($('<td><button class="delete-btn">Delete</button></td>'));
      table.row.add(row).draw();
    });
  });  
});