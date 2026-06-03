---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Usuwa wszystkie wystąpienia wartości wejściowych.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Usuwa wszystkie wystąpienia wartości wymienionych na liście `list2` z listy `list1`. Jeśli wartości wymienione na liście `list2` nie znajdują się na liście `list1`, zwracana jest oryginalna lista. W celu sterowania sprawdzaniem równości można określić opcjonalną wartość kryterium równości `equationCriteria`.


## Examples

### Example #1
Utwórz na podstawie listy \{1, 2, 3, 4, 5, 5\} listę, która nie zawiera wartości \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
