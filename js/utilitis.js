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
  document.getElementById(elementId).innerText = newValue;
}
