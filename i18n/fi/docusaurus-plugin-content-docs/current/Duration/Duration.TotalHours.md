---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Palauttaa tämän keston kattamat tunnit yhteensä.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Palauttaa kohteen <code>duration</code> kattamat tunnit yhteensä.


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
