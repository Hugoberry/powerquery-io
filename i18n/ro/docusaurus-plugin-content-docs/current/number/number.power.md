---
title: Number.Power
---

# Number.Power


Ridică un număr la puterea dată.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Returnează rezultatul ridicării `number` la puterea `power`. Dacă `number` sau `power` este nul, `Number.Power` returnează nul.

-   `number`: baza.
-   `power`: exponentul.


## Examples

### Example #1
Găsiţi valoarea 5 ridicată la puterea 3 (5 la cub).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
