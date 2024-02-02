---
title: Date.Year
---

# Date.Year


## Description

Retourne le composant d&#39;année.


## Syntax

```powerquery
Date.Year(
    dateTime as any
) as number
```


## Details

Retourne le composant d'année de la valeur <code>datetime</code> fournie, <code>dateTime</code>.


## Examples

### Example #1 
Recherche l&#39;année dans #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Year(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
2011
```




## Category
Date
