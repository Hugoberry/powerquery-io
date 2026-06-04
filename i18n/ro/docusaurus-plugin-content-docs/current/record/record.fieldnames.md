---
title: Record.FieldNames
---

# Record.FieldNames


Returnează numele câmpurilor.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Returnează numele câmpurilor din înregistrarea `record` ca text.


## Examples

### Example #1
Găsiți numele câmpurilor din înregistrare.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
