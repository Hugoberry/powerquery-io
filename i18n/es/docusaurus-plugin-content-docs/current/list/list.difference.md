---
title: List.Difference
---

# List.Difference


Devuelve la diferencia de las dos listas dadas.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devuelve los elementos de la lista `list1` que no están en la lista `list2`. No se admiten valores duplicados. Se puede especificar un valor opcional de criterios de ecuación (`equationCriteria`) para controlar la igualdad de las pruebas.


## Examples

### Example #1
Buscar los elementos de la lista \{1, 2, 3, 4, 5\} que no aparecen en \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Encuentra los elementos de la lista \{1, 2\} que no aparecen en la lista \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
