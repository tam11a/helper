var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/lib/string-helper.ts
var string_helper_exports = {};
__export(string_helper_exports, {
  count_substring: () => count_substring,
  reverse: () => reverse
});
function reverse(str) {
  return str.split("").reverse().join("");
}
function count_substring(str, substr) {
  return (str.match(new RegExp(substr, "g")) || []).length;
}

// src/lib/array-object-helper.ts
var array_object_helper_exports = {};
__export(array_object_helper_exports, {
  deep_merge: () => deep_merge
});
function deep_merge(object1, object2) {
  const result = { ...object1 };
  for (const key in object2) {
    if (typeof object2[key] === "object" && object2[key] !== null && !Array.isArray(object2[key])) {
      if (object1[key] && typeof object1[key] === "object" && !Array.isArray(object1[key])) {
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

// src/lib/datetime-helper.ts
var datetime_helper_exports = {};
__export(datetime_helper_exports, {
  format: () => format
});
function format(date, timeZone) {
  return date.toLocaleString("en-US", {
    timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  });
}

// src/index.ts
var src_default = {
  stringHelpers: string_helper_exports,
  arrayObjectHelpers: array_object_helper_exports,
  dateTimeHelpers: datetime_helper_exports
};
export {
  src_default as default
};
