---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Memperluas kolom data atau kolom tabel menjadi beberapa kolom dalam tabel yang mencantumkan.


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

Memperluas tabel dalam <code>table</code>[<code>column</code>] menjadi beberapa baris dan kolom. <code>columnNames</code> digunakan untuk memilih kolom yang akan diperluas dari tabel dalam. Menetapkan <code>newColumnNames</code> untuk menghindari konflik antara kolom yang ada dan kolom baru.


## Examples

### Example #1 
Memperluas kolom tabel dalam &lt;code&gt;[a]&lt;/code&gt; pada tabel &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; menjadi 3 kolom &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt;, dan &lt;code&gt;[t.c]&lt;/code&gt;.
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
