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

Retorna o resultado de elevar `number` à `power`ª potência. Se `number` ou `power` forem nulos, `Number.Power` retornará nulo.

-   `number`: a base.
-   `power`: o expoente.


## Examples

### Example #1
Localize o valor 5 elevado à potência 3 (5 cúbico).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
