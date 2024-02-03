---
title: Table.MaxN
---

# Table.MaxN


## Description

Возвращает наибольшую строку или строки с учетом заданных критериев.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Возвращает наибольшую строку или строки в <code>table</code>, исходя из критериев <code>comparisonCriteria</code>.    Для дальнейшей фильтрации строк после сортировки следует указать параметр <code>countOrCondition</code>. Обратите внимание, что алгоритм сортировки не гарантирует фиксированного порядка сортировки в результате. Параметр <code>countOrCondition</code> может принимать несколько форм:    <ul>        <li> Если указано число, возвращается список до <code>countOrCondition</code> элементов по возрастанию. </li>        <li> Если указано условие, возвращается список элементов, которые изначально соответствуют условию. Как только обнаруживается элемент, не соответствующий условию, последующие элементы не рассматриваются. </li>  </ul>


## Examples

### Example #1 
Нахождение строки с наибольшим значением в столбце [a] с условием [a] &gt; 0 в таблице. Помните, что строки сортируются до применения фильтра.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2 
Нахождение строки с наибольшим значением в столбце [a] с условием [b] &gt; 0 в таблице. Помните, что строки сортируются до применения фильтра.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
