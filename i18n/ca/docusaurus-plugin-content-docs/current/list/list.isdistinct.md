---
title: List.IsDistinct
---

# List.IsDistinct


Indica si hi ha duplicats a la llista.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Retorna un valor lògic en funció de si hi ha duplicats a la llista `list`; `true` si la llista és diferent, `false` si hi ha valors duplicats.


## Examples

### Example #1
Troba si la llista \{1, 2, 3\} és diferent (és a dir, no hi ha duplicats).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Troba si la llista \{1, 2, 3, 3\} és diferent (és a dir, no hi ha duplicats).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
