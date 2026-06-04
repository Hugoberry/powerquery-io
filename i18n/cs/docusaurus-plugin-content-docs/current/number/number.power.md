---
title: Number.Power
---

# Number.Power


Umocní číslo daným exponentem.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Vrátí výsledek umocnění čísla `number` exponentem `power`. Pokud je hodnota `number` nebo `power` null, funkce `Number.Power` vrátí hodnotu null.

-   `number`: Základ
-   `power`: Exponent


## Examples

### Example #1
Vrátí hodnotu 5 umocněnou exponentem 3.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
