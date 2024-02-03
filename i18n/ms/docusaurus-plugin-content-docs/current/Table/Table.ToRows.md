---
title: Table.ToRows
---

# Table.ToRows


## Description

Mencipta senarai bagi senarai tersarang nilai baris daripada jadual.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Details

Mencipta senarai bagi senarai tersarang daripada jadual, <code>table</code>.  Setiap item senarai ialah senarai dalaman yang mengandungi nilai baris.


## Examples

### Example #1 
Ciptakan senarai nilai baris daripada jadual.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
