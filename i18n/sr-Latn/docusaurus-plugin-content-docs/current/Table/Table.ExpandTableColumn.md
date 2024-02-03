---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Proširuje kolonu sa zapisima ili kolonu sa tabelama u više kolona u okviru tabele koja ih sadrži.


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

Proširuje tabele iz <code>table</code>[<code>column</code>] u više redova i kolona. <code>columnNames</code> se koristi za izbor kolona za proširenje iz unutrašnje tabele. Navođenje <code>newColumnNames</code> kako bi se izbegle neusaglašenosti između postojećih i novih kolona.


## Examples

### Example #1 
Proširenje kolona tabele u &lt;code&gt;[a]&lt;/code&gt; u okviru tabele &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; na 3 kolone: &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; i &lt;code&gt;[t.c]&lt;/code&gt;.
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
