---
title: Duration.TotalHours
---

# Duration.TotalHours


Palauttaa tämän keston kattamat tunnit yhteensä.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Palauttaa kohteen `duration` kattamat tunnit yhteensä.


## Examples

### Example #1
Selvitä kestoarvon kattamat tunnit yhteensä.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
