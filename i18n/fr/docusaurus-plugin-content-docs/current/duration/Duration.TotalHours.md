---
title: Duration.TotalHours
---

# Duration.TotalHours


Retourne les heures totales que couvre cette durée.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Retourne le nombre total d’heures s’étendant sur <code>duration</code>.


## Examples

### Example #1 
Recherche les heures totales couvertes par une valeur de durée.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
