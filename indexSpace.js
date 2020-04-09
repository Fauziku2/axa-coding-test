describe("interview test", function() {
  it("expect reverseNum to return reverse integer", function() {
    expect(reverseNum(-115)).toBe(-511);
  });

  it("expect reverseNum with parameter string to return err", function() {
    expect(reverseNum("hello")).toBe("please provide a integer");
  });

  it("expect reverseNum with parameter array to return err", function() {
    expect(reverseNum([1, 2, 3])).toBe("please provide a integer");
  });
});
