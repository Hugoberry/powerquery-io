---
title: Record.SelectFields
---

# Record.SelectFields


Restituisce un record contenente solo i campi specificati.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Restituisce un record che include solo i campi specificati nell'elenco `fields` dell'input `record`.


## Examples

### Example #1
Selezionare i campi "Item" e "Price" nel record.
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
