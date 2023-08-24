describe("example", () => {
  it("should work", () => {
    const body = document.body;
    expect(body).not.toHaveTextContent("Hello World");
  });
});
