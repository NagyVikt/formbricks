// If these are actual dependencies for the above code, they should be moved to the top.
import { describe, expect, test, vi } from "vitest";
import {
  convertDateString,
  convertDateTimeString,
  convertDateTimeStringShort,
  convertDatesInObject,
  convertTimeString,
  formatDate,
  getTodaysDateFormatted,
  getTodaysDateTimeFormatted,
  timeSince,
  timeSinceDate,
} from "./time"; // Assuming 'time.ts' or 'time.js' is in the same directory or accessible path

describe("Time Utilities", () => {
  describe("convertDateString", () => {
    test("should format date string correctly", () => {
      expect(convertDateString("2024-03-20:12:30:00")).toBe("Mar 20, 2024");
    });

    test("should return empty string for empty input", () => {
      expect(convertDateString("")).toBe("");
    });

    test("should return null for null input", () => {
      expect(convertDateString(null as any)).toBe(null);
    });

    test("should handle invalid date strings", () => {
      // Note: The behavior for "not-a-date" might depend on the Date constructor and toLocaleDateString.
      // It might return "Invalid Date" or throw an error, or return a locale-specific string for an invalid date.
      // This test assumes it returns "Invalid Date".
      expect(convertDateString("not-a-date")).toBe("Invalid Date");
    });
  });

  describe("convertDateTimeString", () => {
    test("should format date and time string correctly", () => {
      expect(convertDateTimeString("2024-03-20T15:30:00")).toBe("Wednesday, March 20, 2024 at 3:30 PM");
    });

    test("should return empty string for empty input", () => {
      expect(convertDateTimeString("")).toBe("");
    });
  });

  describe("convertDateTimeStringShort", () => {
    test("should format date and time string in short format", () => {
      expect(convertDateTimeStringShort("2024-03-20T15:30:00")).toBe("March 20, 2024 at 3:30 PM");
    });

    test("should return empty string for empty input", () => {
      expect(convertDateTimeStringShort("")).toBe("");
    });
  });

  describe("convertTimeString", () => {
    test("should format time string correctly", () => {
      expect(convertTimeString("2024-03-20T15:30:45")).toBe("3:30:45 PM");
    });
  });

  describe("timeSince", () => {
    // Mock Date for consistent results in tests
    const mockDate = new Date("2024-05-21T10:00:00.000Z");
    vi.setSystemTime(mockDate);

    test("should format time since in English", () => {
      const oneHourAgo = new Date(mockDate.getTime() - 60 * 60 * 1000); // 9:00 AM UTC
      expect(timeSince(oneHourAgo.toISOString(), "en-US")).toBe("about 1 hour ago");
    });

    test("should format time since in German", () => {
      const oneHourAgo = new Date(mockDate.getTime() - 60 * 60 * 1000); // 9:00 AM UTC
      // Note: The exact German translation might vary based on the library used by `formatDistanceToNow`
      // This is an example, adjust if necessary.
      expect(timeSince(oneHourAgo.toISOString(), "de-DE")).toBe("vor etwa einer Stunde");
    });
    // Clean up mock
    vi.useRealTimers();
  });


  describe("timeSinceDate", () => {
    // Mock Date for consistent results in tests
    const mockDate = new Date("2024-05-21T10:00:00.000Z");
    vi.setSystemTime(mockDate);

    test("should format time since from Date object", () => {
      const oneHourAgo = new Date(mockDate.getTime() - 60 * 60 * 1000);
      expect(timeSinceDate(oneHourAgo)).toBe("about 1 hour ago");
    });
    // Clean up mock
    vi.useRealTimers();
  });

  describe("formatDate", () => {
    test("should format date correctly", () => {
      const date = new Date(2024, 2, 20); // March is month 2 (0-based) -> March 20, 2024
      expect(formatDate(date)).toBe("March 20, 2024");
    });
  });

  describe("getTodaysDateFormatted", () => {
    test("should format today's date with specified separator", () => {
      // Mock Date for consistent results
      const mockToday = new Date(2024, 4, 21); // May 21, 2024 (month is 0-indexed)
      vi.setSystemTime(mockToday);

      // Expected format: YYYY.MM.DD
      const expected = "2024.05.21";
      expect(getTodaysDateFormatted(".")).toBe(expected);

      vi.useRealTimers(); // Reset to real timers
    });
  });

  describe("getTodaysDateTimeFormatted", () => {
    test("should format today's date and time with specified separator", () => {
      // Mock Date and Time for consistent results
      // Note: Timezone differences can affect toISOString and toTimeString.
      // For robust testing, consider mocking the timezone or using a library that handles timezones explicitly.
      const mockToday = new Date(2024, 4, 21, 15, 30, 0); // May 21, 2024, 3:30:00 PM
      vi.setSystemTime(mockToday);

      // Expected format: YYYY.MM.DD.HH.MM.SS
      const expectedDatePart = "2024.05.21";
      const expectedTimePart = "15.30.00"; // Assuming local time matches the mocked time parts
      const expected = `${expectedDatePart}.${expectedTimePart}`;

      expect(getTodaysDateTimeFormatted(".")).toBe(expected);

      vi.useRealTimers(); // Reset to real timers
    });
  });


  describe("convertDatesInObject", () => {
    test("should convert date strings to Date objects in an object", () => {
      const input = {
        id: 1,
        createdAt: "2024-03-20T15:30:00Z", // Added Z for UTC consistency
        updatedAt: "2024-03-20T16:30:00Z", // Added Z for UTC consistency
        nested: {
          createdAt: "2024-03-20T17:30:00Z", // Added Z for UTC consistency
        },
        notADateField: "some string",
      };

      const result = convertDatesInObject(input);
      expect(result.createdAt).toBeInstanceOf(Date);
      expect(result.updatedAt).toBeInstanceOf(Date);
      expect(result.nested.createdAt).toBeInstanceOf(Date);
      // Check if the dates are parsed correctly (optional, but good for verification)
      expect(result.createdAt.toISOString()).toBe("2024-03-20T15:30:00.000Z");
      expect(result.id).toBe(1);
      expect(result.notADateField).toBe("some string");
    });

    test("should handle arrays of objects", () => {
      const input = [
        { createdAt: "2024-03-20T15:30:00Z", data: "first" },
        { createdAt: "2024-03-20T16:30:00Z", data: "second" },
      ];

      const result = convertDatesInObject(input) as Array<any>; // Type assertion for array
      expect(Array.isArray(result)).toBe(true);
      expect(result[0].createdAt).toBeInstanceOf(Date);
      expect(result[0].createdAt.toISOString()).toBe("2024-03-20T15:30:00.000Z");
      expect(result[0].data).toBe("first");
      expect(result[1].createdAt).toBeInstanceOf(Date);
      expect(result[1].createdAt.toISOString()).toBe("2024-03-20T16:30:00.000Z");
      expect(result[1].data).toBe("second");
    });

    test("should return non-objects and non-arrays as is", () => {
      expect(convertDatesInObject(null)).toBe(null);
      expect(convertDatesInObject("string")).toBe("string");
      expect(convertDatesInObject(123)).toBe(123);
      expect(convertDatesInObject(undefined)).toBe(undefined);
      const dateObj = new Date();
      expect(convertDatesInObject(dateObj)).toBe(dateObj); // Already a Date object
    });

     test("should handle objects with no date strings", () => {
      const input = { a: 1, b: "text", c: { d: true } };
      const result = convertDatesInObject(input);
      expect(result).toEqual(input); // Should be unchanged
      expect(result.a).toBe(1);
      expect(result.c.d).toBe(true);
    });

    test("should handle deeply nested objects", () => {
        const input = {
            level1: {
                createdAt: "2024-01-01T00:00:00Z",
                level2: {
                    updatedAt: "2024-01-02T00:00:00Z",
                    level3: {
                        processedAt: "2024-01-03T00:00:00Z",
                        data: "deep"
                    }
                }
            }
        };
        const result = convertDatesInObject(input);
        expect(result.level1.createdAt).toBeInstanceOf(Date);
        expect(result.level1.level2.updatedAt).toBeInstanceOf(Date);
        expect(result.level1.level2.level3.processedAt).toBeInstanceOf(Date);
        expect(result.level1.level2.level3.data).toBe("deep");
    });

    test("should not convert strings that are not valid ISO date strings", () => {
        const input = {
            createdAt: "2024-03-20T15:30:00Z",
            notADate: "This is not a date",
            alsoNotADate: "2024-13-01T00:00:00Z", // Invalid month
            emptyStringDate: ""
        };
        const result = convertDatesInObject(input);
        expect(result.createdAt).toBeInstanceOf(Date);
        expect(result.notADate).toBe("This is not a date");
        expect(result.alsoNotADate).toBe("2024-13-01T00:00:00Z"); // Remains a string
        expect(result.emptyStringDate).toBe(""); // Remains an empty string
    });
  });
});
