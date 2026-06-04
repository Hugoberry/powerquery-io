---
title: Number.Power
---

# Number.Power


Podiže broj na dati stepen.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Vraća rezultat podizanja `number` na stepen `power`. Ako su `number` ili `power` bez vrednosti, `Number.Power` vraća rezultat bez vrednosti.

-   `number`: Osnova.
-   `power`: Eksponent.


## Examples

### Example #1
Pronalaženje vrednosti broja 5 podignutog na treći stepen (5 na kub).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
