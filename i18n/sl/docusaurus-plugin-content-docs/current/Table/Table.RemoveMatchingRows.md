---
title: Table.RemoveMatchingRows
---

# Table.RemoveMatchingRows


## Description

Odstrani vse pojavitve navedenih vrstic iz tabele.


## Syntax

```powerquery
Table.RemoveMatchingRows(
    table as table,
    rows as list,
    optional equationCriteria as any
) as table
```


## Details

Odstrani vse pojavitve navedene vrstice <code>rows</code> iz tabele <code>table</code>.    Določite lahko izbirni parameter <code>equationCriteria</code> za nadzor primerjave med vrsticami tabele.


## Examples

### Example #1 
Odstranite vrstice, kjer je [a = 1], iz tabele &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4], [a = 1, b = 6]})&lt;/code&gt;.
```powerquery
Table.RemoveMatchingRows(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = 1, b = 6]
    }),
    {[a = 1]},
    "a"
)
```

Result: 
```powerquery
Table.FromRecords({[a = 3, b = 4]})
```




## Category
Table.Membership
