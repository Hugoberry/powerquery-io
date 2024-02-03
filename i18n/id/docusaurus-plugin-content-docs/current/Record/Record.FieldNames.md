---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Menghasilkan nama bidang.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Menghasilkan nama bidang dalam data <code>record</code> sebagai teks.


## Examples

### Example #1 
Mencari nama bidang dalam data.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
