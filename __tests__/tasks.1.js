const rewire = require("rewire");
const fs = require("fs");
const content = fs
  .readFileSync("./solution.js")
  .toString("utf-8")
  .replace(/[ ()]/g, "");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe("0. Declare two variables", () => {
  test("The variable `isDogBetter` must be declared with the value of `true`", () => {
    const solution = rewire("../solution");
    const isDogBetter = solution.__get__("isDogBetter");

    expect(isDogBetter).toBeDefined();
    expect(isDogBetter).toEqual(true);
  });
  test("The variable `isCatBetter` must be declared with the value of `false`", () => {
    const solution = rewire("../solution");
    const isCatBetter = solution.__get__("isCatBetter");

    expect(isCatBetter).toBeDefined();
    expect(isCatBetter).toEqual(false);
  });
});

describe("1. Check the result of:", () => {
  test("a) `isDogBetter` `AND` `isCatBetter`", () => {
    const solution = require("../solution");
    const firstConsoleLog = consoleSpy.mock.calls[0][0];
    expect(
      firstConsoleLog === false || firstConsoleLog.includes("false")
    ).toBeTruthy();
    expect(content).toEqual(
      expect.stringContaining("isDogBetter&&isCatBetter")
    );
  });

  test("b) `isDogBetter` `OR` `isCatBetter`", () => {
    const solution = require("../solution");
    const secondConsoleLog = consoleSpy.mock.calls[1][0];
    expect(
      secondConsoleLog === true || secondConsoleLog.includes("true")
    ).toBeTruthy();
    expect(content).toEqual(
      expect.stringContaining("isDogBetter||isCatBetter")
    );
  });

  test("c) `NOT` (`isDogBetter` `AND` `isCatBetter`)", () => {
    const solution = require("../solution");
    content.includes("!isDogBetter&&isCatBetter");
    const thirdConsoleLog = consoleSpy.mock.calls[2][0];
    expect(
      thirdConsoleLog === true || thirdConsoleLog.includes("true")
    ).toBeTruthy();
    expect(content).toEqual(
      expect.stringContaining("!isDogBetter&&isCatBetter")
    );
  });
});

describe("2. Declare three more variables", () => {
  test("The variable `atoms` must be declared and assigned a number as value", () => {
    const solution = rewire("../solution");
    const atoms = solution.__get__("atoms");

    expect(atoms).toBeDefined();
    expect(typeof atoms).toBe("number");
  });
  test("The variable `sandGrains` must be declared and assigned a number as value", () => {
    const solution = rewire("../solution");
    const sandGrains = solution.__get__("sandGrains");

    expect(sandGrains).toBeDefined();
    expect(typeof sandGrains).toBe("number");
  });
  test("The variable `starsInSky` must be declared and assigned a number as value", () => {
    const solution = rewire("../solution");
    const starsInSky = solution.__get__("starsInSky");

    expect(starsInSky).toBeDefined();
    expect(typeof starsInSky).toBe("number");
  });
});

describe("3. Check the result of whether:", () => {
  test("a) `atoms` is greater than `starsInSky` `AND` `atoms` is greater than `sandGrains`", () => {
    expect(content.includes("atoms>starsInSky&&atoms>sandGrains")).toBeTruthy();
  });
  test("b) `atoms` is `NOT` equal to `sandGrains`", () => {
    expect(content.includes("atoms!==sandGrains")).toBeTruthy();
  });
  test("c) `starsInSky` is less than `sandGrains` `OR` `starsInSky` is greater than `atoms`", () => {
    expect(
      content.includes("starsInSky<sandGrains||starsInSky>atoms")
    ).toBeTruthy();
  });
  test("d) `atoms` is equal to `starsInSky` `OR` `atoms` is `NOT` equal to `sandGrains`", () => {
    expect(
      content.includes("atoms==starsInSky||atoms!==sandGrains")
    ).toBeTruthy();
  });
  test("e) `atoms` is greater than or equal to `10` `AND` `sandGrains` is less than or equal to `10`", () => {
    expect(content.includes("atoms>=10&&sandGrains<=10")).toBeTruthy();
  });
  test("f) `atoms` multiplied by `starsInSky` is less than `100` `OR` whether `atoms` multiplied by `sandGrains` is greater than `100`", () => {
    expect(
      content.includes("atoms*starsInSky<100||atoms*sandGrains>100")
    ).toBeTruthy();
  });
});
