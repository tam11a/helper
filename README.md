# Helper

Helper is a collection of utility functions for common tasks such as string manipulation, array/object merging, and date/time formatting. It can be used in both Node.js and browser environments.

## Installation

You can install the library via npm:

```bash
npm install github:tam11a/helper
```

## Usage

### String Helpers

#### stringHelpers.reverse(str)

Reverses the given string.


In TypeScript:

```typescript
import * as helper from "helper";

console.log(helper.stringHelpers.reverse("hello")); // Output: 'olleh'
```

In JavaScript: 

```javascript
const helper = require("helper");

console.log(helper.stringHelpers.reverse("hello")); // Output: 'olleh'
```

#### stringHelpers.count_substring(str, substr)

Counts the number of occurrences of a substring within a string.

```typescript
import * as helper from "helper";

console.log(helper.stringHelpers.count_substring("hello world hello", "hello")); // Output: 2
```

### Array/Object Helpers

#### arrayObjectHelpers.deepMerge(object1, object2)

Deeply merges two objects.

```typescript
import * as helper from "helper";

const obj1 = { a: { b: 1 }, c: 2 };
const obj2 = { a: { d: 3 }, e: 4 };
console.log(helper.arrayObjectHelpers.deep_merge(obj1, obj2)); // Output: { a: { b: 1, d: 3 }, c: 2, e: 4 }

```

### Date/Time Helpers

#### dateTimeHelpers.format(date, timeZone)

Formats a given date object and converts it to the specified timezone.

```typescript
import * as helper from "helper";

const date = new Date();
console.log(helper.dateTimeHelpers.format(date, "America/New_York")); // Output: '3/11/2024, 2:30:00 PM'
```
