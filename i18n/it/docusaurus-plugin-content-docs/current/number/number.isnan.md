---
title: Number.IsNaN
---

# Number.IsNaN


Indica se il valore è NaN (non un numero).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indica se il valore è NaN (non un numero). Restituisce `true` se `number` è equivalente a `Number.NaN`, in caso contrario `false`.


## Examples

### Example #1
Verificare se 0 diviso per 0 è NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Verificare se 1 diviso per 0 è NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
