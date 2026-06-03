---
title: Number.IsNaN
---

# Number.IsNaN


Indica si el valor es NaN (no un número).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indica si el valor es NaN (no un número). Devuelve `true` si `number` es equivalente a `Number.NaN`, `false` en caso contrario.


## Examples

### Example #1
Comprobar si 0 dividido por 0 es NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Comprobar si 1 dividido por 0 es NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
