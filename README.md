# implies
Provides convenient operations for Boolean logical and Bitwise "Implies" operators

# [Installation](#installation)
<a name="installation"></a>

```shell
  npm install implies
```

# [Usage](#usage)
<a name="usage"></a>
lodash-ex replaces and extends lodash, so it only the lodash-ex module needs to be included in your code:

```js
  const { implies, bitwiseImplies } = require('implies');

  console.log(implies(true, true)); true
  console.log(implies(true, false)); false
  console.log(implies(false, true)); true
  console.log(implies(false, false)); true
```

# [API Reference](#api)
<a name="api"></a>

## _.implies(a, b) &#x27fe; boolean
Test the logic imply operation a => b, providing the following truth table:

| A | B | Result |
| - | - | ------ |
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

## _.bitwiseImplies(a, b) &#x27fe; string
Performs a bitwise implies operation between a => b treating the passed values as 64-bit integers.
