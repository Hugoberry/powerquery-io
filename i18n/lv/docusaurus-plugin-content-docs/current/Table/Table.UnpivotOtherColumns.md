---
title: Table.UnpivotOtherColumns
---

# Table.UnpivotOtherColumns


## Description

Tulko visas kolonnas, kas nav norādītā kopā, atribūta vērtības pāros.


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

Tulko visas kolonnas, kas nav norādītā kopā, atribūta vērtības pāros apvienojumā ar pārējām vērtībām katrā rindā.


## Examples

### Example #1 
Tulko visas kolonnas, kas nav norādītā kopā, atribūta vērtības pāros apvienojumā ar pārējām vērtībām katrā rindā.
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
