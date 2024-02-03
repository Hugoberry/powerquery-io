---
title: List.Max
---

# List.Max


## Description

Retorna el valor màxim o el valor per defecte per a una llista buida.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

Retorna l'element màxim de la llista <code>list</code> o el valor per defecte opcional <code>default</code> si la llista és buida.    Es pot especificar un valor comparisonCriteria, <code>comparisonCriteria</code>, per determinar com comparar els elements de la llista. Si aquest paràmetre té el valor nul, s'utilitza el comparador per defecte.


## Examples

### Example #1 
Troba el valor màxim de la llista \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Troba el valor màxim de la llista \{} o retorna -1 si és buida. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
