---
title: Date.Year
---

# Date.Year


Retourne le composant d'année.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Remarks

Retourne le composant d'année de la valeur `datetime` fournie, `dateTime`.


## Examples

### Example #1
Recherche l'année dans #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
