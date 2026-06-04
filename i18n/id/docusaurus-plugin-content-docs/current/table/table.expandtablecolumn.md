---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


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


## Remarks

Memperluas tabel dalam `table`\[`column`\] menjadi beberapa baris dan kolom. `columnNames` digunakan untuk memilih kolom yang akan diperluas dari tabel dalam. Menetapkan `newColumnNames` untuk menghindari konflik antara kolom yang ada dan kolom baru.


## Examples

### Example #1
Memperluas kolom tabel dalam `[a]` pada tabel `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` menjadi 3 kolom `[t.a]`, `[t.b]`, dan `[t.c]`.
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
