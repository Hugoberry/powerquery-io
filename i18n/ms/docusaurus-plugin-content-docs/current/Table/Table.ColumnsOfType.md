---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


## Description

Kembalikan senari dengan nama lajur yang sepadan dengan jenis yang ditentukan.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Details

Kembalikan senarai dengan nama lajur daripda jadual <code>table</code> yang sepadan dengan jenis yang ditentukan dalam <code>listOfTypes</code>.


## Examples

### Example #1 
Mengembalikan nama lajur jenis Number.Type daripada jadual.
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
