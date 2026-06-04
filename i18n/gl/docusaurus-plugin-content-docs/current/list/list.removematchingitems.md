---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Elimina todas as ocorrencias dos valores de entrada.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Elimina todas as ocorrencias dos valores indicados en `list2` da lista `list1`. Se os valores en `list2` non existen en `list1`, devólvese a lista orixinal. Pódese indicar un valor de criterio de ecuación opcional, `equationCriteria`, para controlar probas de igualdade.


## Examples

### Example #1
Crear unha lista de \{1, 2, 3, 4, 5, 5\} sen \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
