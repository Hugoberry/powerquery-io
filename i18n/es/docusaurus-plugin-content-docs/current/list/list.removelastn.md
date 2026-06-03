---
title: List.RemoveLastN
---

# List.RemoveLastN


Devuelve una lista que quita el número especificado de elementos del final de la lista.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Devuelve una lista que quita los `countOrCondition` últimos elementos del final de la lista `list`. Si `list` tiene menos de `countOrCondition` elementos, se devuelve una lista vacía.

-   Si se especifica un número, se quitan hasta ese número de elementos.
-   Si se especifica una condición, se quitan todos los elementos coincidentes consecutivos al final de `list`.
-   Si este parámetro es null, solo se quita un elemento.


## Examples

### Example #1
Crear una lista a partir de \{1, 2, 3, 4, 5\} sin los 3 últimos números.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Crear una lista a partir de \{5, 4, 2, 6, 4\} que termine con un número menor que 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
