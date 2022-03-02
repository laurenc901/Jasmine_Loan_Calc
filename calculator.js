const initVals = {amount: 5000, years: 3, rate: 2.5};



window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
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
const lAmount = document.getElementById("loan-amount");
const lYears = document.getElementById("loan-years");
const lRate = document.getElementById("loan-rate");

 lAmount.value = initVals.amount;
 lYears.value = initVals.years;
 lRate.value = initVals.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currVals));
   
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(initVals) {
  const monthRate = (initVals.rate / 100) / 12;
  const n = Math.floor(initVals.years * 12);
  return(
    (monthRate * initVals.amount) / (1 - Math.pow((1 + monthRate), -n)) ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
const monthlyVal = document.getElementById("monthly-payment");
monthlyVal.innerText = '$' + monthly;
}

