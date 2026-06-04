---
title: List.Min
---

# List.Min


Retorna el valor mínim o el valor per defecte per a una llista buida.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Retorna l'element mínim de la llista `list` o el valor per defecte opcional `default` si la llista és buida. Es pot especificar un valor comparisonCriteria, `comparisonCriteria`, per determinar com comparar els elements de la llista. Si aquest paràmetre té el valor nul, s'utilitza el comparador per defecte.


## Examples

### Example #1
Troba el valor mínim de la llista \{1, 4, 7, 3, -2, 5\}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Troba el valor mínim de la llista \{\} o retorna -1 si és buida.
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
