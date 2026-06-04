---
title: Table.DuplicateColumn
---

# Table.DuplicateColumn


Menghapus kolom dengan nama yang ditetapkan. Nilai dan tipe akan disalin dari kolom sumber.


## Syntax

```powerquery
Table.DuplicateColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional columnType as type
) as table
```


## Remarks

Menduplikasikan kolom bernama `columnName` ke tabel `table`. Nilai dan tipe untuk kolom `newColumnName` disalin dari kolom `columnName`.


## Examples

### Example #1
Menduplikasikan kolom "a" ke kolom "copied column" dalam tabel `({[a = 1, b = 2], [a = 3, b = 4]})`.
```powerquery
Table.DuplicateColumn(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    "a",
    "copied column"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2, #"copied column" = 1],
    [a = 3, b = 4, #"copied column" = 3]
})
```




## Category
Table.Column operations
