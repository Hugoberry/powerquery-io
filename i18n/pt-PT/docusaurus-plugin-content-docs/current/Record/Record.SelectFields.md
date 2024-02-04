---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Devolve um registo que só contém os campos especificados.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Devolve um registo que inclui apenas os campos especificados na lista <code>fields</code> da entrada <code>record</code>.


## Examples

### Example #1 
Selecionar os campos &#34;Item&#34; e &#34;Preço&#34; no registo.
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
