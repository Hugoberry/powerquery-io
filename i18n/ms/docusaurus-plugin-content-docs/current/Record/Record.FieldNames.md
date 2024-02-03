---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Mengembalikan nama bagi medan.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Mengembalikan nama bagi medan dalam rekod <code>record</code> sebagai teks.


## Examples

### Example #1 
Cari nama bagi medan dalam rekod.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
