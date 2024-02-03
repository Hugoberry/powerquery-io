---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Devolve os nomes dos campos.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Devolve os nomes dos campos do rexistro <code>record</code> como texto.


## Examples

### Example #1 
Buscar os nomes dos campos do rexistro.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection