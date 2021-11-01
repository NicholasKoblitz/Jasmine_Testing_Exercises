
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 95000, years: 30, rate: 3 })).toBe('400.52');
  expect(calculateMonthlyPayment({ amount: 120000, years: 30, rate: 3 })).toBe('505.92');

});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 104000, years: 30, rate: 3.5 })).toBeCloseTo('467.01');
  expect(calculateMonthlyPayment({ amount: 120000, years: 30, rate: 3 })).toBeCloseTo('505.92');
});



it('should only return a string', function () {
  expect(typeof calculateMonthlyPayment({ amount: 120000, years: 30, rate: 3 })).toBe('string');
})


