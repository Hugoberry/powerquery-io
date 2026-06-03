---
title: Number.IsNaN
---

# Number.IsNaN


Indica se o valor é NaN (Não é um número).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

Indica se o valor é NaN (não numérico). Devolve `true` se `number` for equivalente a `Number.NaN`, `false` caso contrário.


## Examples

### Example #1
Verificar se 0 dividido por 0 é NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
Verificar se 1 dividido por 0 é NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
