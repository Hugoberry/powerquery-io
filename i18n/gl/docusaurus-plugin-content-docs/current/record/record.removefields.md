---
title: Record.RemoveFields
---

# Record.RemoveFields


Elimina o(s) campo(s) especificado(s) do rexistro de entrada.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devolve un rexistro que elimina todos os campos especificados na lista `fields` da entrada `record`. Se o campo especificado non existe, xérase un erro.


## Examples

### Example #1
Eliminar o campo "Price" do rexistro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Eliminar os campos "Price" e "Item" do rexistro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
