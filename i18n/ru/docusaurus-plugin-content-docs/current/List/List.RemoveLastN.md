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

Возвращает список, который удаляет последние <code>countOrCondition</code> элементов в конце списка <code>list</code>. Если в <code>list</code> меньше <code>countOrCondition</code> элементов, будет возвращен пустой список. <ul> <li>Если указано число, удалено будет количество элементов до указанного значения. </li> <li>Если указано условие, возвращаемый список заканчивается первым элементом из конца в <code>list</code>, удовлетворяющего условию. Как только обнаруживается элемент, не соответствующий условию, последующие элементы не рассматриваются. </li> <li>Если этот параметр имеет значение NULL, будет удален только один элемент. </li> </ul>


## Examples

### Example #1 
Создать список из \{1, 2, 3, 4, 5} без последних 3 цифр.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Создать список из \{5, 4, 2, 6, 4}, который оканчивается на число меньше 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
