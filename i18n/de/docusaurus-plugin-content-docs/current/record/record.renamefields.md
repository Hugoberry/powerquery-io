---
title: Record.RenameFields
---

# Record.RenameFields


Wendet Umbenennungen aus einer Liste im Format "\{ old, new \}" an.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Gibt einen Datensatz zurück, nachdem Felder aus der Eingabe „`record`“ mit den neuen Feldnamen aus der Liste „`renames`“ versehen wurden. Für mehrere Umbenennungen kann eine geschachtelte Liste (\{ \{old1, new1\}, \{old2, new2\}\}) verwendet werden.


## Examples

### Example #1
Benennt das Feld "UnitPrice" aus dem Datensatz in "Price" um.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2
Benennt die Felder "UnitPrice" aus dem Datensatz in "Price" und "OrderNum" in "OrderID" um.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
