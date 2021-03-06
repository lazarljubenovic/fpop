# fpop

Floating Point OPerators.

## Installation

```bash
yarn add fpop
```

## Usage

```typescript
import * as fpop from 'fpop'

const a = 1
const b = 1.00000001

const c = 2
const d = 2.00000001
const e = 2.00000002

fpop.eq(a, b) // => true
fpop.eq(c, d, e) // => true

fpop.lt(a, b) // => false
fpop.gte(c, a) // => true
```

## List of operators

### Unary

- `isZero`
- `isPositive`
- `isNegative`

### Binary

- `eq2` equal
- `neq` not equal
- `lt2` less than
- `gt2` greater than
- `lte2` less than or equal
- `gte2` greater than or equal

### N-ary

- `eq` equal
- `lt` less than
- `gt` greater than
- `lte` less than or equal
- `gte` greater than or equal
- `areZero`
- `arePositive`
- `areNegative`
- `areSameSign`
