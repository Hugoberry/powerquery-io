---
title: Record.FieldNames
---

# Record.FieldNames


Gibt die Namen der Felder zurück.


## Syntax

```powerquery
Record.FieldNames(
    record as record
) as list
```


## Remarks

Gibt die Namen der Felder im Datensatz "<code>record</code>" als Text zurück.


## Examples

### Example #1 
Ermittelt die Namen der Felder im Datensatz.
```powerquery
Record.FieldNames([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
{"OrderID", "CustomerID", "Item", "Price"}
```




## Category
Record.Selection
