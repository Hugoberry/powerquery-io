---
title: Record.SelectFields
---

# Record.SelectFields


Gibt einen Datensatz zurück, der ausschließlich die angegebenen Felder enthält.


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Gibt einen Datensatz zurück, der ausschließlich die in der Liste "`fields`" angegebenen Felder aus der Eingabe "`record`" enthält.


## Examples

### Example #1
Wählt die Felder "Item" und "Price" des Datensatzes aus.
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
