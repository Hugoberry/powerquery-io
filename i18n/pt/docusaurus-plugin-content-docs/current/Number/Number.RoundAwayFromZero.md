---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


## Description

Returns the result of rounding positive numbers up and negative numbers down. The number of digits can be specified.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Details

Returns the result of rounding <code>number</code> based on the sign of the number. This function will round positive numbers up and negative numbers down.    If <code>digits</code> is specified, <code>number</code> is rounded to the <code>digits</code> number of decimal digits.  


## Examples

### Example #1 
Round the number -1.2 away from zero.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Round the number 1.2 away from zero.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Round the number -1.234 to two decimal places away from zero.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding
