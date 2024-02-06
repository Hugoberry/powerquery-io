---
title: List.RemoveItems
---

# List.RemoveItems


Usuwa elementy wymienione na liście list1 z danej listy.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Usuwa wszystkie wystąpienia wartości wymienionych na liście <code>list2</code> z listy <code>list1</code>. Jeśli wartości wymienione na liście <code>list2</code> nie znajdują się na liście <code>list1</code>, zwracana jest oryginalna lista.


## Examples

### Example #1 
Usuń elementy wymienione na liście \{2, 4, 6} z listy \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
