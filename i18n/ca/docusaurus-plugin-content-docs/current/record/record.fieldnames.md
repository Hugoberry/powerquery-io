---
title: Record.FieldNames
---

# Record.FieldNames


Retorna els noms dels camps.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Retorna els noms dels camps del registre `record` com a text.


## Examples

### Example #1
Cerca els noms dels camps del registre.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
