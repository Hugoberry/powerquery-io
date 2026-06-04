---
title: Record.FieldNames
---

# Record.FieldNames


Pateikiami laukų pavadinimai.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Pateikiami laukų įraše `record` pavadinimai kaip tekstas.


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
