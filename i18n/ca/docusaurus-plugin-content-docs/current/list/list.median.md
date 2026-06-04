---
title: List.Median
---

# List.Median


Retorna el valor mitjà de la llista.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Retorna l'element de la mediana de la llista `list`. Aquesta funció retorna `null` si la llista no conté cap valor que no sigui `null`. Si el nombre d'elements és parell, la funció tria el més petit dels dos elements de la mediana, tret en el cas en què la llista. només inclogui dates i hores, durades, nombres o repeticions. En aquest cas, retorna la mitjana dels dos elements.


## Examples

### Example #1
Troba la mitjana de la llista `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
