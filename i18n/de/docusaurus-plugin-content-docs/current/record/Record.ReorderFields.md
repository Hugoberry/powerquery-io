---
title: Record.ReorderFields
---

# Record.ReorderFields


Ändert die Reihenfolge der angegebenen Felder in die neue Reihenfolge.


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Gibt einen Datensatz zurück, nachdem die Felder in "<code>record</code>" gemäß der Reihenfolge der Liste "<code>fieldOrder</code>" angeordnet wurden. Die Feldwerte bleiben erhalten. Die Position von Feldern, die nicht in "<code>fieldOrder</code>" enthalten sind, bleibt unverändert.


## Examples

### Example #1 
Sortiert einige der Felder im Datensatz neu.
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
