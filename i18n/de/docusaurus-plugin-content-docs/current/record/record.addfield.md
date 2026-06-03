---
title: Record.AddField
---

# Record.AddField


Fügt einem Datensatz ein Feld hinzu.


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Remarks

Fügt einem Datensatz (`record`) auf der Grundlage des Feldnamens (`fieldName`) und -werts (`value`) ein Feld hinzu.


## Examples

### Example #1
Fügt dem Datensatz das Feld "Address" hinzu.
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
