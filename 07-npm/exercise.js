
import dayjs from "dayjs";

/**
 * Formats a date as DD/MM/YYYY.
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * Returns the year of a date.
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * Returns a date that many days after the given date.
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

/**
 * The package chosen from the npm registry.
 */
export const myPackage = "nanoid";
