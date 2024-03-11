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
declare const _default: {
    deep_merge: typeof deep_merge;
};
export default _default;
