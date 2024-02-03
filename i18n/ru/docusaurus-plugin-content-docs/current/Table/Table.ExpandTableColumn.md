---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Развертывает столбец записей или столбец таблиц в несколько столбцов в содержащей их таблице.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Details

Развертывает таблицы в <code>table</code>[<code>column</code>] в несколько строк и столбцов. <code>columnNames</code> используется для выбора столбцов для развертывания из внутренней таблицы. Укажите <code>newColumnNames</code>, чтобы избежать конфликтов между существующими и новыми столбцами.


## Examples

### Example #1 
Развернуть столбцы таблицы в &lt;code&gt;[a]&lt;/code&gt; в таблице &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; в 3 столбца - &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; и &lt;code&gt;[t.c]&lt;/code&gt;.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
