---
title: Number.Power
---

# Number.Power


Raises a number to the given power.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Returns the result of raising <code>number</code> to the power of <code>power</code>.    If <code>number</code> or <code>power</code> are null, <code>Number.Power</code> returns null.      <ul>        <li><code>number</code>: The base.</li>        <li><code>power</code>: The exponent.</li>      </ul>


## Examples

### Example #1 
Find the value of 5 raised to the power of 3 (5 cubed).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
