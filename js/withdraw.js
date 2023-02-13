document.getElementById("withdraw-btn").addEventListener("click", () => {
  const withdrawInputValue = getInputFieldValue("withdraw-amount-input");

  if (isNaN(withdrawInputValue)) {
    alert("Please Enter a valid number ballance");
    return;
  }

  const withdrawTotalValue = getTextElementValue("withdraw-total");
  const ballanceTotalValue = getTextElementValue("ballance-total");
  if (ballanceTotalValue < withdrawInputValue) {
    alert("Insufficient ballance");
    return;
  }
  setTextElementValue(
    "withdraw-total",
    withdrawTotalValue + withdrawInputValue
  );
  setTextElementValue(
    "ballance-total",
    ballanceTotalValue - withdrawInputValue
  );
});
