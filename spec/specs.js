describe('factorial', function() {
  it("is equal to 120 if 5 is inputted", function () {
    expect(factorial(5)).to.equal(120);
  });

  it("is equal to -1 if a negative number is inputted", function() {
    expect(factorial(-5)).to.equal(-1);
  });

  it("is equal to 1 if 0 is inputted", function() {
    expect(factorial(0)).to.equal(1);
  });
});
