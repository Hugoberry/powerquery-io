---
title: Table.ToColumns
---

# Table.ToColumns


Mencipta senarai bagi senarai tersarang nilai lajur daripada jadual.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

Mencipta senarai bagi senarai tersarang daripada jadual, `table`. Setiap item senarai ialah senarai dalaman yang mengandungi nilai lajur.


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
