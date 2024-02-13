---
title: Number.RoundUp
---

# Number.RoundUp


Returns the next highest number. The number of digits can be specified.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Returns the result of rounding <code>number</code> up to the next highest integer. If <code>number</code> is null, this function returns null.    If <code>digits</code> is provided, <code>number</code> is rounded to the specified number of decimal digits.  


## Examples

### Example #1 
Round up 1.234 to integer.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Round up 1.999 to integer.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Round up 1.234 to two decimal places.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
