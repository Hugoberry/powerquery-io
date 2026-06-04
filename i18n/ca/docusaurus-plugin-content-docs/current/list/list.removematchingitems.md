---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Suprimeix totes les aparicions dels valors d'entrada.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Suprimeix totes les aparicions dels valors donats a `list2` des de la llista `list1`. Si els valors de `list2` no existeixen a `list1`, es retorna la llista original. Un valor de criteris d'equació opcional, `equationCriteria`, es pot especificar per controlar la prova d'igualtat.


## Examples

### Example #1
Crea una llista de \{1, 2, 3, 4, 5, 5\} sense \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
