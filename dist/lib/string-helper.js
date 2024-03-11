/**
 * Reverses the given string.
 *
 * @param {string} str - The input string to be reversed.
 * @returns {string} The reversed string.
 */
export function reverse(str) {
    return str.split("").reverse().join("");
}
/**
 * Counts the number of occurrences of a substring within a string.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substr - The substring to count occurrences of.
 * @returns {number} The number of occurrences of the substring.
 */
export function count_substring(str, substr) {
    return (str.match(new RegExp(substr, "g")) || []).length;
}
