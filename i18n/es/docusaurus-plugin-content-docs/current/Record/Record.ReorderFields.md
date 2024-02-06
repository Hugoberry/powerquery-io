---
title: Record.ReorderFields
---

# Record.ReorderFields


Reordena los campos especificados en el nuevo orden.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devuelve un registro después de cambiar el orden de los campos de <code>record</code> por el orden de campos especificado en la lista <code>fieldOrder</code>. Se mantienen los valores de campo y los campos no mostrados en <code>fieldOrder</code> se quedan en su posición original.


## Examples

### Example #1 
Cambiar algunos de los campos del registro.
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
