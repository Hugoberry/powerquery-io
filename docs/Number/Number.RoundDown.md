---
title: Number.RoundDown
---

# Number.RoundDown


Returns the highest previous number. The number of digits can be specified.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Returns the result of rounding <code>number</code> down to the previous highest integer. If <code>number</code> is null, this function returns null.    If <code>digits</code> is provided, <code>number</code> is rounded to the specified number of decimal digits.  


## Examples

### Example #1 
Round down 1.234 to integer.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Round down 1.999 to integer.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Round down 1.999 to two decimal places.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
