---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Restituisce un record contenente solo i campi specificati.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Restituisce un record che include solo i campi specificati nell'elenco <code>fields</code> dell'input <code>record</code>.


## Examples

### Example #1 
Selezionare i campi &#34;Item&#34; e &#34;Price&#34; nel record.
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
