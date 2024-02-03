---
title: Table.UnpivotOtherColumns
---

# Table.UnpivotOtherColumns


## Description

Menterjemahkan semua lajur selain daripada set yang ditentukan menjadi pasangan nilai atribut.


## Syntax

```powerquery
Table.UnpivotOtherColumns(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Details

Menterjemahkan semua lajur selain daripada set yang ditentukan menjadi pasangan nilai atribut digabungkan dengan nilai-nilai lain dalam setiap baris.


## Examples

### Example #1 
Menterjemahkan semua lajur selain daripada set yang ditentukan menjadi pasangan nilai atribut digabungkan dengan nilai-nilai lain dalam setiap baris.
```powerquery
Table.UnpivotOtherColumns(
    Table.FromRecords({
        [key = "key1", attribute1 = 1, attribute2 = 2, attribute3 = 3],
        [key = "key2", attribute1 = 4, attribute2 = 5, attribute3 = 6]
    }),
    {"key"},
    "column1",
    "column2"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "key1", column1 = "attribute1", column2 = 1],
    [key = "key1", column1 = "attribute2", column2 = 2],
    [key = "key1", column1 = "attribute3", column2 = 3],
    [key = "key2", column1 = "attribute1", column2 = 4],
    [key = "key2", column1 = "attribute2", column2 = 5],
    [key = "key2", column1 = "attribute3", column2 = 6]
})
```




## Category
Table.Column operations
