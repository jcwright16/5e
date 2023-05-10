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