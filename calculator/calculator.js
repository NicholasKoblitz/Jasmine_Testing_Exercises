window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = '';
  document.getElementById("loan-years").value = '';
  document.getElementById("loan-rate").value = '';
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  return calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let amount = values.amount;
  let rate = (values.rate / 100) / 12;
  let years = values.years * -12;

  let pay = (amount * (rate) / (1 - (1 + rate) ** years));
  let payment = pay.toFixed(2).toString();

  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    const monthlyPayment = document.querySelector('#monthly-payment');
    monthlyPayment.innerText = monthly;
  }

  // updateMonthly(payment);
  return payment;
}
