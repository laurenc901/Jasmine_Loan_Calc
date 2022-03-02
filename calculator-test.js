
it('should calculate the monthly rate correctly', function () {
  const val = {amount: 1500, years: 2, rate: 3};
  expect(calculateMonthlyPayment(val)).toEqual('64.47')
});


it("should return a result with 2 decimal places", function() {
  const val = {amount: 10038, years: 5, rate: 3.5};
  expect(calculateMonthlyPayment(val)).toEqual('182.63');
});
