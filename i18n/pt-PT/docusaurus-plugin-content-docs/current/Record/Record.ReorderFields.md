---
title: Record.ReorderFields
---

# Record.ReorderFields


## Description

Reordena os campos especificados pela nova ordem.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Devolve um registo depois de reordenar os campos existentes em <code>record</code> pela ordem de campos especificada na lista <code>fieldOrder</code>. Os valores dos campos são mantidos e os campos não listados em <code>fieldOrder</code> são mantidos na posição original.


## Examples

### Example #1 
Reordenar alguns dos campos existentes no registo.
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
