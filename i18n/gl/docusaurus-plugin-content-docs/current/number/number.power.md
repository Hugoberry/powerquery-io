---
title: Number.Power
---

# Number.Power


Eleva un número á potencia indicada.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Devolve o resultado de elevar `number` á potencia de `power`. Se `number` ou `power` son nulos, `Number.Power` devolve nulo.

-   `number`: a base.
-   `power`: o expoñente.


## Examples

### Example #1
Buscar o valor de 5 elevado á potencia de 3 (5 ao cubo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
