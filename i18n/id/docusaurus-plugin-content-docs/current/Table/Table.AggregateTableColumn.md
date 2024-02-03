---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Mengagregat kolom tabel menjadi beberapa kolom dalam tabel yang mencantumkan.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

Mengagregat tabel dalam <code>table</code>[<code>column</code>]menjadi beberapa kolom berisi nilai agregat untuk tabel. <code>aggregations</code> digunakan untuk menetapkan kolom berisi tabel yang akan diagregat, fungsi agregat yang akan diterapkan ke tabel untuk menghasilkan nilainya, dan nama kolom agregat yang akan dibuat.


## Examples

### Example #1 
Mengagregat kolom tabel dalam &lt;code&gt;[t]&lt;/code&gt; pada tabel &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; menjadi penjumlahan &lt;code&gt;[t.a]&lt;/code&gt;, min dan maks &lt;code&gt;[t.b]&lt;/code&gt;, serta hitungan nilai dalam &lt;code&gt;[t.a]&lt;/code&gt;.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
