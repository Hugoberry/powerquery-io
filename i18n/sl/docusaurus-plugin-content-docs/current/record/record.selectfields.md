---
title: Record.SelectFields
---

# Record.SelectFields


Vrne zapis, ki vsebuje le navedena polja.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Vrne zapis, ki vključuje le polja, navedena na seznamu `fields` iz zapisa `record`.


## Examples

### Example #1
Izberite polji"Izdelek"in"Cena"v zapisu.
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
