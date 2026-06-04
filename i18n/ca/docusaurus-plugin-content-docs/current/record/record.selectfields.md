---
title: Record.SelectFields
---

# Record.SelectFields


Retorna un registre que només conté els camps especificats.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Retorna un registre que només inclou els camps especificats a la llista `fields` a partir de l'entrada `record`.


## Examples

### Example #1
Selecciona els camps "Item" i "Price" al registre.
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
