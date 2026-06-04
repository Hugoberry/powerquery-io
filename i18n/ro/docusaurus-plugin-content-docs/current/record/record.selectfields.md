---
title: Record.SelectFields
---

# Record.SelectFields


Returnează o înregistrare care conţine numai câmpurile specificate.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Returnează o înregistrare ce include numai câmpurile specificate în lista `fields` din datele introduse `record`.


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
