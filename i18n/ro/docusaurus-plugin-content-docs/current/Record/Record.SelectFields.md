---
title: Record.SelectFields
---

# Record.SelectFields


## Description

Returnează o înregistrare care conţine numai câmpurile specificate.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

Returnează o înregistrare ce include numai câmpurile specificate în lista <code>fields</code> din datele introduse <code>record</code>.


## Examples

### Example #1 
Selectați câmpurile „Element” și „Preț” din înregistrare.
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
