---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Returns the result of rounding positive numbers down and negative numbers up. The number of digits can be specified.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Returns the result of rounding <code>number</code> based on the sign of the number. This function will round positive numbers down and negative numbers up.    If <code>digits</code> is specified, <code>number</code> is rounded to the <code>digits</code> number of decimal digits.  


## Examples

### Example #1 
Round the number -1.2 toward zero.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2 
Round the number 1.2 toward zero.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3 
Round the number -1.234 to two decimal places toward zero.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
