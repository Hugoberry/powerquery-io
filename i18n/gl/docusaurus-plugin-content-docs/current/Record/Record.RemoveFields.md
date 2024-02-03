---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Elimina o(s) campo(s) especificado(s) do rexistro de entrada.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Devolve un rexistro que elimina todos os campos especificados na lista <code>fields</code> da entrada <code>record</code>. Se o campo especificado non existe, xérase unha excepción.


## Examples

### Example #1 
Eliminar o campo &#34;Price&#34; do rexistro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Eliminar os campos &#34;Price&#34; e &#34;Item&#34; do rexistro.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
