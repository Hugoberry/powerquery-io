---
title: Number.Power
---

# Number.Power


Eleva um número à potência especificada.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Devolve o resultado de elevar `number` à potência de `power`. Se `number` ou `power` forem nulos, `Number.Power` devolve um valor nulo.

-   `number`: a base.
-   `power`: o expoente.


## Examples

### Example #1
Determinar o valor de 5 elevado à potência de 3 (5 ao cubo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
