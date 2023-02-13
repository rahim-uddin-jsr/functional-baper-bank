function getInputFieldValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputFieldValue;
}
function getTextElementValue(id) {
  const element = document.getElementById(id);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

function setTextElementValue(elementId, newValue) {
  // if (isNaN(newValue)) {
  //   alert("Please Enter a valid");
  //   return;
  // }
  document.getElementById(elementId).innerText = newValue;
}

function isError(condition) {
  if (condition) {
    alert("Please Enter a valid number ballance");
    return;
  }
}