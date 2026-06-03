---
title: Record.RemoveFields
---

# Record.RemoveFields


Quita los campos especificados del registro de entrada.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devuelve un registro que quita todos los campos especificados en la lista `fields` de la entrada `record`. Si el campo especificado no existe, se produce un error.


## Examples

### Example #1
Quitar el campo "Price" del registro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Quitar los campos "Price" e "Item" del registro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
