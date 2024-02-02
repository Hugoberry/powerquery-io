---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Returns the names of the fields.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Returns the names of the fields in the record <code>record</code> as text.


## Examples

### Example #1 
Find the names of the fields in the record.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
