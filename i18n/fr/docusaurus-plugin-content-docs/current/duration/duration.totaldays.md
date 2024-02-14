---
title: Duration.TotalDays
---

# Duration.TotalDays


Retourne les jours totaux que couvre cette durée.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Retourne le nombre total de jours s’étendant sur <code>duration</code>.


## Examples

### Example #1 
Recherche les jours totaux couverts par une valeur de durée.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
