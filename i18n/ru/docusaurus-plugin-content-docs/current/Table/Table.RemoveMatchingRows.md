---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Удаляет все вхождения указанных строк из таблицы.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Удаляет все вхождения указанных <code>rows</code> из <code>table</code>.    Для управления сравнением строк таблицы может быть указан необязательный параметр <code>equationCriteria</code>.


## Examples

### Example #1 
Удалить все строки, где [a = 1], из таблицы &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
