---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Vrátí názvy polí.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Vrátí názvy polí v záznamu <code>record</code> jako text.


## Examples

### Example #1 
Vrátí názvy polí záznamu.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
