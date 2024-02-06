---
title: List.Difference
---

# List.Difference


Возвращает разницу между двумя данными списками.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Возвращает элементы в списке <code>list1</code>, которых нет в списке <code>list2</code>. Повторяющиеся значения поддерживаются.    Можно указать необязательное значение критерия уравнения <code>equationCriteria</code> для управления проверкой на равенство. 


## Examples

### Example #1 
Поиск элементов в списке \{1, 2, 3, 4, 5}, которых нет в списке \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Найти элементы в списке \{1, 2}, которых нет в списке \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
