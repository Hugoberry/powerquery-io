---
title: Number.Power
---

# Number.Power


Potencira število na dani eksponent.


## Syntax

```powerquery
Number.Power(
    number as number,
    power as number
) as number
```


## Remarks

Vrne rezultat potenciranja števila `number` na eksponent `power`. Če ima `number` ali `power` ničelno vrednost, `Number.Power` vrne"null".

-   `number`: osnova.
-   `power`: eksponent.


## Examples

### Example #1
Poiščite vrednost števila 5 na potenco 3 (5 na tretjo).
```powerquery
Number.Power(5, 3)
```

Result: 
```powerquery
125
```




## Category
Number.Operations
