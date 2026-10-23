
/**
 * Cleans up a label and shouts it.
 */
export function shout(text) {
  return text.trim().toUpperCase();
}

/**
 * Returns the initials of a full name.
 */
export function initials(fullName) {
  return fullName
    .split(" ")
    .map(part => part[0])
    .join("")
    .toUpperCase();
}

/**
 * Turns a product into JSON text.
 */
export function toJson(product) {
  return JSON.stringify(product);
}

/**
 * Returns a student's name or a fallback.
 */
export function displayName(student) {
  return student.name || "Unknown student";
}

/**
 * Parses JSON text and builds a product summary.
 */
export function summaryFromJson(jsonText) {
  const product = JSON.parse(jsonText);
  return `${product.name} costs ${product.price} EGP`;
}
