---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Elimina todas as ocorrencias dos valores de entrada.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Elimina todas as ocorrencias dos valores indicados en <code>list2</code> da lista <code>list1</code>. Se os valores en <code>list2</code> non existen en <code>list1</code>, devólvese a lista orixinal.    Pódese indicar un valor de criterio de ecuación opcional, <code>equationCriteria</code>, para controlar probas de igualdade. 


## Examples

### Example #1 
Crear unha lista de \{1, 2, 3, 4, 5, 5} sen \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
