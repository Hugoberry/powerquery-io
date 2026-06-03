---
title: Number.IsNaN
---

# Number.IsNaN


Anger om värdet är NaN (inte ett tal).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Anger om värdet är NaN (inte ett tal). Returnerar `true` om `number` är `Number.NaN` och annars `false`.


## Examples

### Example #1
Kontrollera om 0 dividerat med 0 är NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Kontrollera om 1 dividerat med 0 är NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
