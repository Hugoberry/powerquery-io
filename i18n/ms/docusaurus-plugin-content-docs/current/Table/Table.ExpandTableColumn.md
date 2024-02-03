---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Mengembangkan lajur rekod atau lajur pada jadual kepada berbilang lajur dalam jadual yang mengandunginya.


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

Mengembangkan jadual dalam <code>table</code>[<code>column</code>] kepada berbilang baris dan lajur. <code>columnNames</code> digunakan untuk memilih lajur untuk dikembangkan daripada jadual dalaman. Tentukan <code>newColumnNames</code> untuk mengelakkan konflik antara lajur sedia ada dan lajur baru.


## Examples

### Example #1 
Kembangkan lajur jadual dalam &lt;code&gt;[a]&lt;/code&gt; dalam jadual &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; kepada 3 lajur &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; dan &lt;code&gt;[t.c]&lt;/code&gt;.
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
