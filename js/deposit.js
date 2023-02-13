document.getElementById("deposit-btn").addEventListener("click", () => {
  const depositInputValue = getInputFieldValue("deposit-amount-input");
  if (isNaN(depositInputValue)) {
    alert("Please Enter a valid number ballance");
    return;
  }
  const depositTotalValue = getTextElementValue("deposit-total");
  const ballanceTotalValue = getTextElementValue("ballance-total");

  setTextElementValue("deposit-total", depositInputValue + depositTotalValue);
  setTextElementValue("ballance-total", ballanceTotalValue + depositInputValue);
});
