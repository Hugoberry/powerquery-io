---
title: Record.SelectFields
---

# Record.SelectFields


Retorna um registro que contém somente os campos especificados.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna um registro que inclui somente os campos especificados na lista `fields` da entrada `record`.


## Examples

### Example #1
Selecionar os campos "Item" e "Price" no registro.
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
