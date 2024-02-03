---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Menerapkan perubahan nama \{ old, new } dari daftar dalam formulir.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Menghasilkan data setelah mengubah nama bidang dalam input <code>record</code> menjadi nama bidang baru yang ditetapkan dalam daftar <code>renames</code>. Untuk beberapa perubahan nama, daftar bersarang dapat digunakan (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Mengubah nama bidang &#34;UnitPrice&#34; menjadi &#34;Price&#34; dari data.
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
Mengubah nama bidang &#34;UnitPrice&#34; menjadi &#34;Price&#34; dan &#34;OrderNum&#34; menjadi &#34;OrderID&#34; dari data.
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
