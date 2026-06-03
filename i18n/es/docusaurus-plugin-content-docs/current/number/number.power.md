---
title: Number.Power
---

# Number.Power


Eleva un número a la potencia especificada.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Devuelve el resultado de elevar `number` a la potencia de `power`. Si `number` o `power` son "null", `Number.Power` devuelve "null".

-   `number`: la base.
-   `power`: el exponente.


## Examples

### Example #1
Hallar el valor de 5 elevado a la potencia de 3 (5 al cubo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
