---
title: List.MinN
---

# List.MinN


## Description

Возвращает минимальные значения в списке. Можно указать количество возвращаемых значений или условие фильтрования.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Возвращает минимальные значения в списке <code>list</code>.    Параметр <code>countOrCondition</code> задает количество возвращаемых значений или условие фильтрации. Необязательный параметр <code>comparisonCriteria</code> указывает, как сравнивать значения в списке. <ul>        <li> <code>list</code>: список значений.</li>        <li> <code>countOrCondition</code>: если указано число, возвращается список элементов до <code>countOrCondition</code> по возрастанию. Если указано условие, возвращается список элементов, которые изначально соответствуют условию. Как только обнаруживается элемент, не соответствующий условию, последующие элементы не рассматриваются. Если этот параметр имеет значение NULL, возвращается одно наименьшее значение в списке.</li><li><code>comparisonCriteria</code>: <i>[Необязательно]</i> Необязательное значение <code>comparisonCriteria</code> определяет, как сравнивать элементы в списке. Если этот параметр имеет значение NULL, используется функция сравнения по умолчанию. </li></ul>


## Examples

### Example #1 
Найти 5 наименьших значений в списке &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt;.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
