
it('should calculate the monthly rate correctly', function () {
  expect()
});


it("should return a result with 2 decimal places", function () {
  expect(calculateMonthlyPayment({ amount: 104000, years: 30, rate: 3.5 })).toBe('467.01');
});



it('should only return a string', function () {
  expect(calculateMonthlyPayment({ amount: 104000, years: 30, rate: 3.5 })).toBeInstanceOf(String);
})
