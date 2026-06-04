---
title: Number.IsNaN
---

# Number.IsNaN


Indica si el valor és NaN (no és un nombre).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indicates if the value is NaN (Not a number). Returns `true` if `number` is equivalent to `Number.NaN`, `false` otherwise.


## Examples

### Example #1
Comprova si 0 dividit per 0 és NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Comprova si 1 dividit per 0 és NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
