const add = (a, b) => {
    return a + b;
}
test("adds 1+2 equals 3", () => {
    expect(add(1, 2)).toBe(3);
})