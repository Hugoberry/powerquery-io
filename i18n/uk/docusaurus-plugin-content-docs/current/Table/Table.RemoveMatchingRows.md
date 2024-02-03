---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Видаляє всі входження вказаних рядків з таблиці.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Вилучає всі екземпляри вказаного елемента (<code>rows</code>) з таблиці "<code>table</code>".    Можна вказати додатковий параметр <code>equationCriteria</code>, щоб керувати порівнянням рядків таблиці.


## Examples

### Example #1 
Видалити рядки, у яких [a = 1], з таблиці &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
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
