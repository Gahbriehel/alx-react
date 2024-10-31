import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils function tests", () => {
  // Test for getFooterCopy
  test('getFooterCopy returns "Holberton School" when argument is true', () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  test('getFooterCopy returns "Holberton School main dashboard" when argument is false', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  test("getLatestNotification returns the correct string", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });

  test("getFullYear returns the current year", () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });
});
