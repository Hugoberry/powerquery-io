---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Retourne les minutes totales que couvre cette durée.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Retourne le nombre total de minutes s’étendant sur <code>duration</code>.


## Examples

### Example #1 
Recherche les minutes totales couvertes par une valeur de durée.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
