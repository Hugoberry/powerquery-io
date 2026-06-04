---
title: Number.Power
---

# Number.Power


Umocní číslo na danú mocninu.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Vráti výsledok umocnenia čísla `number` na mocninu `power`. Ak hodnota `number` alebo `power` je null, funkcia `Number.Power` vráti hodnotu null.

-   `number`: Základ.
-   `power`: Exponent.


## Examples

### Example #1
Nájdite hodnotu čísla 5 umocneného na 3. mocninu.
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
