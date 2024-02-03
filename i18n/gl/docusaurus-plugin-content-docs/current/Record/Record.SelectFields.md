---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Devolve o rexistro que contén só os campos especificados.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Devolve un rexistro que só inclúe os campos especificados na lista <code>fields</code> da entrada <code>record</code>.


## Examples

### Example #1 
Seleccionar os campos &#34;Item&#34; e &#34;Price&#34; do rexistro.
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
