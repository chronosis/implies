# implies
[![NPM](https://nodei.co/npm/implies.png?downloads=true)](https://nodei.co/npm/implies/)

[![Actual version published on npm](http://img.shields.io/npm/v/implies.svg)](https://www.npmjs.org/package/implies)
[![Master build](https://github.com/chronosis/implies/actions/workflows/build-master.yml/badge.svg)](https://github.com/chronosis/implies/actions/workflows/build-master.yml)
[![Total npm module downloads](http://img.shields.io/npm/dt/implies.svg)](https://www.npmjs.org/package/implies)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/dcf2d8cc6c114943835e79c8a8c18b18)](https://www.codacy.com/gh/chronosis/implies/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=chronosis/implies&amp;utm_campaign=Badge_Grade)
[![Codacy Coverage Badge](https://app.codacy.com/project/badge/Coverage/dcf2d8cc6c114943835e79c8a8c18b18)](https://www.codacy.com/gh/chronosis/implies/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=chronosis/implies&amp;utm_campaign=Badge_Coverage)
[![Dependencies badge](https://david-dm.org/chronosis/implies/status.svg)](https://david-dm.org/chronosis/implies?view=list)

Provides convenient operations for Boolean logical and Bitwise "Implies" operators
# [Installation](#installation)
<a name="installation"></a>

```shell
  npm install implies
```

# [Usage](#usage)
<a name="usage"></a>

```js
  const { implies, bitwiseImplies } = require('implies');

  console.log(implies(true, true));   // true
  console.log(implies(true, false));  // false
  console.log(implies(false, true));  // true
  console.log(implies(false, false)); // true
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

## _.bitwiseImplies(a, b, [radix=10]) &#x27fe; string
Performs a bitwise implies operation between a => b treating the passed values as 64-bit integers and returning a numeric string of the given radix/base (defaulting to base-10)
