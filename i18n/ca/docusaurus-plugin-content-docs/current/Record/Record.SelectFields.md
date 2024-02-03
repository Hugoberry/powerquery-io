---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Retorna un registre que només conté els camps especificats.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Retorna un registre que només inclou els camps especificats a la llista <code>fields</code> a partir de l'entrada <code>record</code>.


## Examples

### Example #1 
Selecciona els camps &#34;Item&#34; i &#34;Price&#34; al registre.
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
