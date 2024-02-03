---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Menggunakan nama semula daripada senarai dalam bentuk \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Mengembalikan rekod selepas menamakan semula medan dalam input <code>record</code> kepada nama medan baru yang ditentukan dalam senarai <code>renames</code>. Untuk berbilang nama semula, senarai tersarang boleh digunakan (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Namakan semua medan &#34;UnitPrice&#34; ke &#34;Price&#34; daripada rekod.
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
Namakan semula medan &#34;UnitPrice&#34; ke &#34;Price&#34; dan &#34;OrderNum&#34; ke &#34;OrderID&#34; daripada rekod.
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
