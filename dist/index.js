"use strict";
// const stringHelpers = require("./lib/string-helper");
// const arrayObjectHelpers = require("./lib/array-object-helper");
// const dateTimeHelpers = require("./lib/datetime-helper");
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Deeply merges two objects.
 *
 * @param {object} object1 - The first object to merge.
 * @param {object} object2 - The second object to merge.
 * @returns {object} A new object containing the merged properties of the input objects.
 */
function deep_merge(object1, object2) {
    const result = Object.assign({}, object1);
    for (const key in object2) {
        if (typeof object2[key] === "object" &&
            object2[key] !== null &&
            !Array.isArray(object2[key])) {
            if (object1[key] &&
                typeof object1[key] === "object" &&
                !Array.isArray(object1[key])) {
                result[key] = deep_merge(object1[key], object2[key]);
            }
            else {
                result[key] = Object.assign({}, object2[key]);
            }
        }
        else {
            if (object2[key] !== null && Array.isArray(object2[key])) {
                if (object1[key] && Array.isArray(object1[key])) {
                    result[key] = [...result[key], ...object2[key]];
                }
                else {
                    result[key] = [...object2[key]];
                }
            }
            else {
                result[key] = object2[key];
            }
        }
    }
    return result;
}
module.exports = {
    // stringHelpers,
    // arrayObjectHelpers,
    // dateTimeHelpers,
    deep_merge,
};
