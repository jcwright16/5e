document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function() {
    // Initialize DataTable
    var table = $('#myTable').DataTable({
      ordering: true,
      paging: false,
      info: false,
      columns : [
        {type:String},
        {type:String},
        null
      ]
      
    });

    // Attach click event listener to save buttons
    $('#myTable').on('click', '.save-btn', function() {
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
    $('#myTable').on('click', '.delete-btn', function() {
      var row = $(this).closest('tr');
      table.row(row).remove().draw();
    });

    // Attach click event listener to add button
    $('#add-btn').on('click', function () {
      var row = $('<tr></tr>');
      row.append($('<td><input class="name" type="text"></td>'));
      row.append($('<td><input class="age" type="number"></td>'));
      row.append($('<td><button class="delete-btn">Delete</button></td>'));
      table.row.add(row).draw();
    });
  });  
});