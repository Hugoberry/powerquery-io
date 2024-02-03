---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Удаляет все вхождения входных значений.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Удаляет все вхождения значений, заданных в списке <code>list2</code>, из списка <code>list1</code>. Если значения в <code>list2</code> не существуют в <code>list1</code>, то возвращается исходный список.    Необязательное значение критерия уравнения <code>equationCriteria</code> можно указать для управления проверкой на равенство. 


## Examples

### Example #1 
Создать список из \{1, 2, 3, 4, 5, 5} без \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
