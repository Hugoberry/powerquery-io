---
title: Record.RenameFields
---

# Record.RenameFields


Menggunakan nama semula daripada senarai dalam bentuk \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Mengembalikan rekod selepas menamakan semula medan dalam input `record` kepada nama medan baru yang ditentukan dalam senarai `renames`. Untuk berbilang penamaan semula, senarai tersarang boleh digunakan (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Namakan semua medan "UnitPrice" ke "Price" daripada rekod.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Namakan semula medan "UnitPrice" ke "Price" dan "OrderNum" ke "OrderID" daripada rekod.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
