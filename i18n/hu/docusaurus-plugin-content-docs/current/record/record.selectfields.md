---
title: Record.SelectFields
---

# Record.SelectFields


Egy olyan rekordot ad vissza, amely csak a megadott mezőket tartalmazza.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Egy olyan rekordot ad vissza, amely csak a bemeneti `record` azon mezőit tartalmazza, amelyek meg vannak adva a(z) `fields` listán.


## Examples

### Example #1
Kiválasztja a rekordban levő Item és Price mezőket.
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
