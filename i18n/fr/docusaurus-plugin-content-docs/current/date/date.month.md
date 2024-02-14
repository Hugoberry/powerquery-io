---
title: Date.Month
---

# Date.Month


Retourne le composant de mois.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Retourne le composant de mois de la valeur <code>datetime</code> fournie, <code>dateTime</code>.


## Examples

### Example #1 
Recherche le mois dans #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
