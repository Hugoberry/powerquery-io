---
title: Number.IsNaN
---

# Number.IsNaN


Angiver, om værdien er NaN (ikke et tal).


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
Kontrollér, om 0 divideret med 0 er NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Kontrollér, om 1 divideret med 0 er NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
