---
title: List.Median
---

# List.Median


Devuelve el valor de la mediana de la lista.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Devuelve el elemento de mediana de la lista `list`. Esta función devuelve `null` si la lista no contiene ningún valor que no sea `null`. Si el número de elementos es par, la función elige el menor de los dos elementos de mediana, a menos que la lista esté formada en su totalidad por valores de fecha y hora, duración, números o repeticiones, en cuyo caso devuelve la media de los dos elementos.


## Examples

### Example #1
Buscar la mediana de la lista `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
