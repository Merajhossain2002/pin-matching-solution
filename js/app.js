function generatePin() {
  const randomPin = Math.round(Math.random() * 10000);
  const makePinString = randomPin + "";
  if (makePinString.length === 4) {
    return makePinString;
  } else {
    return generatePin();
  }
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const getPinInputField = document.getElementById("display-pin");
  const pin = generatePin();
  getPinInputField.value = pin;
});

document.getElementById("verify-pin").addEventListener("click", function () {
  console.log("clicked");
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const typedNumber = event.target.innerText;
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(typedNumber)) {
      if (typedNumber === "C") {
        typedNumberField.value = "";
      } else if (typedNumber === "<") {
        const digits = previousTypedNumber.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        typedNumberField.value = remainingDigits;
      }
    } else {
      const add = previousTypedNumber + typedNumber;
      typedNumberField.value = add;
    }
  });

document.getElementById("verify-pin").addEventListener("click", function () {
  const pinElement = document.getElementById("display-pin");
  const pin = pinElement.value;
  const typedPinElement = document.getElementById("typed-numbers");
  const typedPin = typedPinElement.value;

  const successMsgElement = document.getElementById("pin-success");
  const failureMsgElement = document.getElementById("pin-failure");

  if (typedPin === pin) {
    successMsgElement.style.display = "block";
    failureMsgElement.style.display = "none";
  } else {
    failureMsgElement.style.display = "block";
    successMsgElement.style.display = "none";
  }
});
