---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Retourneert een record die alleen de opgegeven velden bevat.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Retourneert een record die alleen de velden bevat die in de lijst <code>fields</code> uit de invoer <code>record</code> zijn opgegeven.


## Examples

### Example #1 
De velden Item en Price in de record selecteren.
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
