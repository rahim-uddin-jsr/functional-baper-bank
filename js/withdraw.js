document.getElementById("withdraw-btn").addEventListener("click", () => {
  const withdrawInputValue = getInputFieldValue("withdraw-amount-input");
  const withdrawTotalValue = getTextElementValue("withdraw-total");
  const ballanceTotalValue = getTextElementValue("ballance-total");

  setTextElementValue(
    "withdraw-total",
    withdrawTotalValue + withdrawInputValue
  );
  setTextElementValue(
    "ballance-total",
    ballanceTotalValue - withdrawInputValue
  );
});
