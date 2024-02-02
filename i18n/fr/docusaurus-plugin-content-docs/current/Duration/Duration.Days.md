---
title: Duration.Days
---

# Duration.Days


## Description

Retourne la partie jours d’une durée.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Retourne la partie jours de <code>duration</code>.


## Examples

### Example #1 
Extrayez le nombre de jours entre deux dates.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
