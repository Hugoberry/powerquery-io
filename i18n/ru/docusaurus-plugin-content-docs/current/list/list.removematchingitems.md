---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Удаляет все вхождения входных значений.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Удаляет все вхождения значений, заданных в списке `list2`, из списка `list1`. Если значения в `list2` не существуют в `list1`, то возвращается исходный список. Необязательное значение критерия уравнения `equationCriteria` можно указать для управления проверкой на равенство.


## Examples

### Example #1
Создать список из \{1, 2, 3, 4, 5, 5\} без \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
