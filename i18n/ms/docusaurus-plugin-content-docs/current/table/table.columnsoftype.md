---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


Kembalikan senari dengan nama lajur yang sepadan dengan jenis yang ditentukan.


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

Kembalikan senarai dengan nama lajur daripda jadual `table` yang sepadan dengan jenis yang ditentukan dalam `listOfTypes`.


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
