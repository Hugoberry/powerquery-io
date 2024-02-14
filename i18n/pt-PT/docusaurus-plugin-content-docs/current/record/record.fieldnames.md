---
title: Record.FieldNames
---

# Record.FieldNames


Devolve os nomes dos campos.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Devolve os nomes dos campos existentes no registo <code>record</code> como texto.


## Examples

### Example #1 
Determinar os nomes dos campos existentes no registo.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
