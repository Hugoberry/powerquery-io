---
title: Record.FieldNames
---

# Record.FieldNames


Vráti názvy polí.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Vráti názvy polí v zázname `record` ako text.


## Examples

### Example #1
Nájdite v zázname názvy polí.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
