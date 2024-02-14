---
title: Record.ReorderFields
---

# Record.ReorderFields


Reorganiza os campos especificados na nova ordem.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna um registro após reordenar os campos em <code>record</code> na ordem dos campos especificados na lista <code>fieldOrder</code>. Os valores de campo são mantidos, e os campos não listados em <code>fieldOrder</code> são deixados na posição original.


## Examples

### Example #1 
Reordenar alguns dos campos do registro.
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
