---
title: Duration.Days
---

# Duration.Days


## Description

Palauttaa keston päiväosan.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Palauttaa kohteen <code>duration</code> päiväosan.


## Examples

### Example #1 
Poimi kahden päivämäärän välisten päivien määrä.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
