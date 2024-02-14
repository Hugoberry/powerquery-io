---
title: Record.FieldNames
---

# Record.FieldNames


Devuelve los nombres de los campos.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Devuelve los nombres de los campos del registro <code>record</code> como texto.


## Examples

### Example #1 
Hallar los nombres de los campos del registro.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
