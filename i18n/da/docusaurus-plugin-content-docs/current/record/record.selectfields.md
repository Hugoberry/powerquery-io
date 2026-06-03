---
title: Record.SelectFields
---

# Record.SelectFields


Returnerer en post, som kun indeholder de angivne felter.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnerer en post, der kun indeholder de felter, som er angivet på listen `fields`, fra inputtet `record`.


## Examples

### Example #1
Vælg felterne "Item" og "Price" i posten.
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
