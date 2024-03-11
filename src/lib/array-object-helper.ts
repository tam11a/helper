/**
 * Deeply merges two objects.
 *
 * @param {object} object1 - The first object to merge.
 * @param {object} object2 - The second object to merge.
 * @returns {object} A new object containing the merged properties of the input objects.
 */

export function deep_merge(
  object1: {
    [key: string]: any;
  },
  object2: {
    [key: string]: any;
  }
): {
  [key: string]: any;
} {
  const result = { ...object1 };
  for (const key in object2) {
    if (
      typeof object2[key] === 'object' &&
      object2[key] !== null &&
      !Array.isArray(object2[key])
    ) {
      if (
        object1[key] &&
        typeof object1[key] === 'object' &&
        !Array.isArray(object1[key])
      ) {
        result[key] = deep_merge(object1[key], object2[key]);
      } else {
        result[key] = { ...object2[key] };
      }
    } else {
      if (object2[key] !== null && Array.isArray(object2[key])) {
        if (object1[key] && Array.isArray(object1[key])) {
          result[key] = [...result[key], ...object2[key]];
        } else {
          result[key] = [...object2[key]];
        }
      } else {
        result[key] = object2[key];
      }
    }
  }
  return result;
}
