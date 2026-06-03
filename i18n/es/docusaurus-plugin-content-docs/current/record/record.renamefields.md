---
title: Record.RenameFields
---

# Record.RenameFields


Cambia el nombre de los elementos de una lista con el formato \{ old, new \}.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devuelve un registro después de cambiar el nombre de los campos en la entrada `record` por los nuevos nombres de campo especificados en la lista `renames`. Para cambiar varios nombres, se puede usar una lista anidada (\{ \{old1, new1\}, \{old2, new2\} \}).


## Examples

### Example #1
Cambiar el nombre "UnitPrice" por "Price" del registro.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Cambiar el nombre de los campos "UnitPrice" a "Price" y "OrderNum" a "OrderID" del registro.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
