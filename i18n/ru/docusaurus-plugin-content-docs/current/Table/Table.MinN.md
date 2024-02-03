---
title: Table.MinN
---

# Table.MinN


## Description

Возвращает наименьшие строки с учетом заданных критериев.


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

Возвращает наименьшие строки в <code>table</code>, исходя из критериев <code>comparisonCriteria</code>. Для дальнейшей фильтрации строк после сортировки следует указать параметр <code>countOrCondition</code>. Обратите внимание, что алгоритм сортировки не гарантирует фиксированного порядка сортировки в результате. Параметр <code>countOrCondition</code> может принимать несколько форм:    <ul>        <li> Если указано число, возвращается список до <code>countOrCondition</code> элементов по возрастанию. </li>        <li> Если указано условие, возвращается список элементов, которые изначально соответствуют условию. Как только обнаруживается элемент, не соответствующий условию, последующие элементы не рассматриваются. </li> </ul>


## Examples

### Example #1 
Нахождение строки с наименьшим значением в столбце [a] с условием [a] &lt; 3 в таблице. Помните, что строки сортируются до применения фильтра.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
Нахождение строки с наименьшим значением в столбце [a] с условием [b] &lt; 0 в таблице. Помните, что строки сортируются до применения фильтра.
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
