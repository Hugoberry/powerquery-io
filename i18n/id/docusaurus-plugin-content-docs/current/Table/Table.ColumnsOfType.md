---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Menghasilkan daftar dengan nama kolom yang sesuai dengan jenis yang ditentukan.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Menghasilkan daftar dengan nama kolom dari tabel <code>table</code> yang sesuai dengan jenis yang ditentukan di <code>listOfTypes</code>.


## Examples

### Example #1 
Menghasilkan nama kolom jenis Number.Type dari tabel.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
