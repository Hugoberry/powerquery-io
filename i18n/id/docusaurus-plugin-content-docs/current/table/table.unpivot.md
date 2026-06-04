---
title: Table.Unpivot
---

# Table.Unpivot


Menerjemahkan himpunan kolom pada tabel ke pasangan nilai atribut.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Remarks

Menerjemahkan himpunan kolom pada tabel ke pasangan nilai atribut, dikombinasikan dengan nilai lainnya pada setiap baris.


## Examples

### Example #1
Mengambil kolom "a", "b", dan "c" pada tabel `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})`, lalu membatalkan pivot ke pasangan nilai atribut.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
