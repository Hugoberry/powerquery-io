---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Returns the square root of the number.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Returns the square root of <code>number</code>.    If <code>number</code> is null, <code>Number.Sqrt</code> returns null. If it is a negative value, <code>Number.NaN</code> is returned (Not a number).


## Examples

### Example #1 
Find the square root of 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Find the square root of 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
