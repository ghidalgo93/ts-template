import { sum } from "../app";

describe("sum function", () => {
    test("test sum 1+2=3", () => {
      expect(sum(1,2)).toBe(3)
    })
})