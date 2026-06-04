---
title: Number.IsNaN
---

# Number.IsNaN


Indica se o valor é NaN (non numérico).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indica se o valor é NaN (non é un número). Devolve `true` se `number` é equivalente a `Number.NaN`, `false` en caso contrario.


## Examples

### Example #1
Comprobar se 0 dividido entre 0 é NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Comprobar se 1 dividido entre 0 é NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
