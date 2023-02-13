document.getElementById("deposit-btn").addEventListener("click", () => {
  const depositInputValue = getInputFieldValue("deposit-amount-input");
  const depositTotalValue = getTextElementValue("deposit-total");
  const ballanceTotalValue = getTextElementValue("ballance-total");

  setTextElementValue("deposit-total", depositInputValue + depositTotalValue);
  setTextElementValue("ballance-total", ballanceTotalValue + depositInputValue);
});
