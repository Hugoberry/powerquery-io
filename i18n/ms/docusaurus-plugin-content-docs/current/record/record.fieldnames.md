---
title: Record.FieldNames
---

# Record.FieldNames


Mengembalikan nama bagi medan.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Mengembalikan nama bagi medan dalam rekod `record` sebagai teks.


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
