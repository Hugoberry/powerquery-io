---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Mengagregat kolom tabel menjadi beberapa kolom dalam tabel yang mencantumkan.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

Mengagregat tabel dalam `table`\[`column`\]menjadi beberapa kolom berisi nilai agregat untuk tabel. `aggregations` digunakan untuk menetapkan kolom berisi tabel yang akan diagregat, fungsi agregat yang akan diterapkan ke tabel untuk menghasilkan nilainya, dan nama kolom agregat yang akan dibuat.


## Examples

### Example #1
Mengagregat kolom tabel dalam `[t]` pada tabel `{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` menjadi penjumlahan `[t.a]`, min dan maks `[t.b]`, serta hitungan nilai dalam `[t.a]`.
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
