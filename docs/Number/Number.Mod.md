---
title: Number.Mod
---

# Number.Mod


## Description

Integer divides two numbers and returns the remainder.


## Syntax

```powerquery
Number.Mod(
    number as number,
    divisor as number,
    optional precision as Precision.Type
) as number
```


## Details

Returns the remainder resulting from the integer division of <code>number</code> by <code>divisor</code>.    If <code>number</code> or <code>divisor</code> are null, <code>Number.Mod</code> returns null.      <ul>        <li><code>number</code>: The dividend.</li>        <li><code>divisor</code>: The divisor.</li>      </ul>


## Examples

### Example #1 
Find the remainder when you divide 5 by 3.
```powerquery
Number.Mod(5, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
