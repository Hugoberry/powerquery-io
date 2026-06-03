---
title: Number.Sqrt
---

# Number.Sqrt


Returns the square root of the number.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Returns the square root of `number`. If `number` is null, `Number.Sqrt` returns null. If it is a negative value, `Number.NaN` is returned (Not a number).


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
