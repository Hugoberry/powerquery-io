---
title: Record.SelectFields
---

# Record.SelectFields


Tiek atgriezts ieraksts, kurā ir ietverti tikai norādītie lauki.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Tiek atgriezts ieraksts, kurā ir ietverti tikai tie ievades ieraksta `record` lauki, kas ir norādīti sarakstā `fields`.


## Examples

### Example #1
Atlasiet ieraksta laukus "Item" un "Price".
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
