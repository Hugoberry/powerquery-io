---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Usuwa wszystkie wystąpienia wartości wejściowych.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Usuwa wszystkie wystąpienia wartości wymienionych na liście <code>list2</code> z listy <code>list1</code>. Jeśli wartości wymienione na liście <code>list2</code> nie znajdują się na liście <code>list1</code>, zwracana jest oryginalna lista.    W celu sterowania sprawdzaniem równości można określić opcjonalną wartość kryterium równości <code>equationCriteria</code>. 


## Examples

### Example #1 
Utwórz na podstawie listy \{1, 2, 3, 4, 5, 5} listę, która nie zawiera wartości \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
