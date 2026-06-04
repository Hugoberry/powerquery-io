---
title: Number.Power
---

# Number.Power


Eleva un nombre a la potència donada.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Retorna el resultat d'elevar `number` a la potència de `power`. Si `number` o `power` són nuls, `Number.Power` retorna el valor nul.

-   `number`: la base.
-   `power`: l'exponent.


## Examples

### Example #1
Troba el valor de 5 elevat a la potència de 3 (5 elevat al cub).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
