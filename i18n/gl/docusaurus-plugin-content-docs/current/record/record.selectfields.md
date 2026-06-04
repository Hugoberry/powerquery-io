---
title: Record.SelectFields
---

# Record.SelectFields


Devolve o rexistro que contén só os campos especificados.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devolve un rexistro que só inclúe os campos especificados na lista `fields` da entrada `record`.


## Examples

### Example #1
Seleccionar os campos "Item" e "Price" do rexistro.
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
