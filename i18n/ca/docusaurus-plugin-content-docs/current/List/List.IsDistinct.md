---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Indica si hi ha duplicats a la llista.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Retorna un valor lògic en funció de si hi ha duplicats a la llista <code>list</code>; <code>true</code> si la llista és diferent, <code>false</code> si hi ha valors duplicats. 


## Examples

### Example #1 
Troba si la llista \{1, 2, 3} és diferent (és a dir, no hi ha duplicats).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Troba si la llista \{1, 2, 3, 3} és diferent (és a dir, no hi ha duplicats).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
