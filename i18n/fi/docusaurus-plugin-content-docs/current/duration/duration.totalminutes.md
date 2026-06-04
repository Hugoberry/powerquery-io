---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Palauttaa tämän keston kattamat minuutit yhteensä.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Palauttaa kohteen `duration` kattamat minuutit yhteensä.


## Examples

### Example #1
Selvitä kestoarvon kattamat minuutit yhteensä.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
