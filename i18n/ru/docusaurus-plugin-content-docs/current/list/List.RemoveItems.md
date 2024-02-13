---
title: List.RemoveItems
---

# List.RemoveItems


Удаляет элементы из list1, присутствующие в списке.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Удаляет все вхождения указанных значений из <code>list2</code> в <code>list1</code>. Если значения в <code>list2</code> не существуют в <code>list1</code>, то возвращается исходный список.


## Examples

### Example #1 
Удалить элементы списка \{2, 4, 6} из списка \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
