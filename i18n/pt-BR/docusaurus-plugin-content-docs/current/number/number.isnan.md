---
title: Number.IsNaN
---

# Number.IsNaN


Indica se o valor é NaN (e não um número).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indica se o valor é NaN (e não um número). Retorna `true` se `number` for equivalente a `Number.NaN`, `false` caso contrário.


## Examples

### Example #1
Verifique se 0 dividido por 0 é NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Verifique se 1 dividido por 0 é NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
