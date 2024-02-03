---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Pateikiami laukų pavadinimai.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Pateikiami laukų įraše <code>record</code> pavadinimai kaip tekstas.


## Examples

### Example #1 
Raskite laukų pavadinimus įraše.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
