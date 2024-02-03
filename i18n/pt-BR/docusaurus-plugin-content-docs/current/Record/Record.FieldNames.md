---
title: Record.FieldNames
---

# Record.FieldNames


## Description

Retorna os nomes dos campos.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Details

Retorna os nomes dos campos no registro <code>record</code> como texto.


## Examples

### Example #1 
Localizar os nomes dos campos no registro.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
