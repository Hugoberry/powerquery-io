---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Розгортає стовпець записів або стовпець таблиць у декілька стовпців у таблиці.


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

Розгортає таблиці в <code>table</code>[<code>column</code>] у кілька рядків і стовпців. <code>columnNames</code> використовується для вибору стовпців для розгортання із внутрішньої таблиці. <code>newColumnNames</code> визначається для уникнення конфліктів між існуючими та новими стовпцями.


## Examples

### Example #1 
Розгорнути стовпці таблиці в &lt;code&gt;[a]&lt;/code&gt; у таблиці &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; у 3 стовпці &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; та &lt;code&gt;[t.c]&lt;/code&gt;.
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
