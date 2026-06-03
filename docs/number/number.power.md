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

Returns the result of raising `number` to the power of `power`. If `number` or `power` are null, `Number.Power` returns null.

-   `number`: The base.
-   `power`: The exponent.


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
