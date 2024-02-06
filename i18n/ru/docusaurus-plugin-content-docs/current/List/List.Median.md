---
title: List.Median
---

# List.Median


Возвращает медиану для списка.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Возвращает средний элемент списка <code>list</code>. Если все элементы списка имеют значение <code>null</code>, функция возвращает значение <code>null</code>.    Если в списке четное число элементов, функция возвращает наименьший из двух средних элементов за исключением случая, когда список    включает только даты, продолжительность, числа или временные отметки — в этом случае возвращается среднее значение двух элементов.


## Examples

### Example #1 
Найти медиану списка &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
