---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Retourne les secondes totales que couvre cette durée.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Retourne le nombre total de secondes s’étendant sur <code>duration</code>.


## Examples

### Example #1 
Recherche les secondes totales couvertes par une valeur de durée.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
