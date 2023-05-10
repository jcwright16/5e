var inputFields = document.getElementsByClassName("myInput");

// Load the saved values from local storage on page load
window.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < inputFields.length; i++) {
    var savedValue = localStorage.getItem("entry" + i);
    if (savedValue) {
      inputFields[i].value = savedValue;
    }
  }
});

// Save the input values to local storage on change
for (var i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", function() {
    var entryIndex = Array.prototype.indexOf.call(inputFields, this);
    var entry = this.value;
    localStorage.setItem("entry" + entryIndex, entry);
  });
}