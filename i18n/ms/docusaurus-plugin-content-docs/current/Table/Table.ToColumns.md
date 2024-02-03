---
title: Table.ToColumns
---

# Table.ToColumns


## Description

Mencipta senarai bagi senarai tersarang nilai lajur daripada jadual.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Details

Mencipta senarai bagi senarai tersarang daripada jadual, <code>table</code>.  Setiap item senarai ialah senarai dalaman yang mengandungi nilai lajur.


## Examples

### Example #1 
Ciptakan senarai nilai lajur daripada jadual.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
