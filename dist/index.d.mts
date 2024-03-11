/**
 * Reverses the given string.
 *
 * @param {string} str - The input string to be reversed.
 * @returns {string} The reversed string.
 */
declare function reverse(str: string): string;
/**
 * Counts the number of occurrences of a substring within a string.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substr - The substring to count occurrences of.
 * @returns {number} The number of occurrences of the substring.
 */
declare function count_substring(str: string, substr: string): number;

declare const stringHelper_count_substring: typeof count_substring;
declare const stringHelper_reverse: typeof reverse;
declare namespace stringHelper {
  export { stringHelper_count_substring as count_substring, stringHelper_reverse as reverse };
}

/**
 * Deeply merges two objects.
 *
 * @param {object} object1 - The first object to merge.
 * @param {object} object2 - The second object to merge.
 * @returns {object} A new object containing the merged properties of the input objects.
 */
declare function deep_merge(object1: {
    [key: string]: any;
}, object2: {
    [key: string]: any;
}): {
    [key: string]: any;
};

declare const arrayObjectHelper_deep_merge: typeof deep_merge;
declare namespace arrayObjectHelper {
  export { arrayObjectHelper_deep_merge as deep_merge };
}

/**
 * Formats a given date object and converts it to the specified timezone.
 *
 * @param {Date} date - The date object to format and convert.
 * @param {string} timeZone - The timezone to convert the date to (e.g., 'America/New_York').
 * @returns {string} A string representing the formatted date and time in the specified timezone.
 */
declare function format(date: Date, timeZone: string): string;

declare const datetimeHelper_format: typeof format;
declare namespace datetimeHelper {
  export { datetimeHelper_format as format };
}

export { arrayObjectHelper as arrayObjectHelpers, datetimeHelper as dateTimeHelpers, stringHelper as stringHelpers };
