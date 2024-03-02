export default function ValidateInput(amount, number) {
  let errornum = "";
  let erroramt = "";
  let isAmountValid = true;
  let isNumberValid = true;
  console.log(amount, "popo");
  amount = amount.replace(/\D/g, "");
  if (amount < 100 || amount > 5000) {
    erroramt = "Amount must be betweeen ₦100 and ₦5000";
    console.log("God");
    isAmountValid = false;
  } else {
    erroramt = "";
    isAmountValid = true;
  }
  if (number.length < 11 || isNaN(number) || Number(number) == 0) {
    errornum = "You must use 11 digit Nigerian mobile number";
    isNumberValid = false;
  } else {
    errornum = "";
    isNumberValid = true;
  }
  return [errornum, erroramt, isAmountValid, isNumberValid];
}
