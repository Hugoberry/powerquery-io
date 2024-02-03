---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Vráti názvy polí.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Vráti názvy polí v zázname <code>record</code> ako text.


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
