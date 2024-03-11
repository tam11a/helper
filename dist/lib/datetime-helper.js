/**
 * Formats a given date object and converts it to the specified timezone.
 *
 * @param {Date} date - The date object to format and convert.
 * @param {string} timeZone - The timezone to convert the date to (e.g., 'America/New_York').
 * @returns {string} A string representing the formatted date and time in the specified timezone.
 */
export function format(date, timeZone) {
    return date.toLocaleString('en-US', {
        timeZone,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    });
}
