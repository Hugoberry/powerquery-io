---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Menyusun ulang bidang yang ditetapkan menjadi susunan baru.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Menghasilkan data setelah menyusun ulang bidang dalam <code>record</code> menjadi susunan bidang yang ditetapkan dalam daftar <code>fieldOrder</code>. Nilai bidang dipertahankan dan bidang yang tidak tercantum dalam <code>fieldOrder</code> dibiarkan pada posisi aslinya.


## Examples

### Example #1 
Menyusun ulang beberapa bidang dalam data.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
