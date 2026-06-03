---
title: List.RemoveLastN
---

# List.RemoveLastN


Возвращает список, который удаляет указанное число элементов в конце списка.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Возвращает список, который удаляет последние `countOrCondition` элементов в конце списка `list`. Если `list` имеет меньше `countOrCondition` элементов, возвращается пустой список.

-   Если указано число, будет удалено максимальное количество элементов.
-   Если указано условие, все последовательные совпадающие элементы в конце `list` удаляются.
-   Если этот параметр имеет значение NULL, удаляется только один элемент.


## Examples

### Example #1
Создать список из \{1, 2, 3, 4, 5\} без последних 3 цифр.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Создать список из \{5, 4, 2, 6, 4\}, который оканчивается на число меньше 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
