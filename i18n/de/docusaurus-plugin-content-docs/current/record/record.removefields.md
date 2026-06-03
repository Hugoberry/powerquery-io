---
title: Record.RemoveFields
---

# Record.RemoveFields


Entfernt die angegebenen Felder aus dem Eingabedatensatz.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Gibt einen Datensatz zurück, in dem alle in der Liste „`fields`“ angegebenen Felder aus der Eingabe „`record`“ entfernt wurden. Wenn das angegebene Feld nicht vorhanden ist, wird ein Fehler ausgelöst.


## Examples

### Example #1
Entfernt das Feld "Price" aus dem Datensatz.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
Entfernt die Felder "Price" und "Item" aus dem Datensatz.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
