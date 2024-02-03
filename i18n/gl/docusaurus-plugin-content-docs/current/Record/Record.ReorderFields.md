---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Reordena o(s) campo(s) especificados na nova orde.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Devolve un rexistro despois de reordenar os campos de <code>record</code> na orde de campos especificada na lista <code>fieldOrder</code> Os valores de campo mantéñense e os campos non listados en <code>fieldOrder</code> déixanse na súa posición orixinal.


## Examples

### Example #1 
Reordenar algúns dos campos do rexistro.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
