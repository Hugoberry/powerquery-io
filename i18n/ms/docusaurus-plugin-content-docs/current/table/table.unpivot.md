---
title: Table.Unpivot
---

# Table.Unpivot


Menterjemahkan set lajur dalam jadual ke dalam pasangan nilai atribut.


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

Menterjemahkan set lajur dalam jadual ke dalam pasangan nilai atribut, digabungkan dengan baki nilai dalam setiap baris.


## Examples

### Example #1
Ambil lajur "a", "b" dan "c" dalam jadual `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` dan nyahpangsinya ke dalam pasangan nilai atribut.
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
