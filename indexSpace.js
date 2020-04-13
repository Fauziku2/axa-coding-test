describe("interview test", function() {
  it("expect reverseNum(-115) to return -511", function() {
    expect(reverseNum(-115)).toBe(-511);
  });

  it("expect reverseNum(-50) to return -5", function() {
    expect(reverseNum(-50)).toBe(-5);
  });

  it("expect reverseNum(400) to return 4", function() {
    expect(reverseNum(400)).toBe(4);
  });

  it("expect reverseNum with parameter string to return err", function() {
    expect(reverseNum("hello")).toBe("please provide a integer");
  });

  it("expect reverseNum with parameter array to return err", function() {
    expect(reverseNum([1, 2, 3])).toBe("please provide a integer");
  });
});
