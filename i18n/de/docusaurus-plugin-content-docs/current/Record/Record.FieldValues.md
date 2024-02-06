---
title: Record.FieldValues
---

# Record.FieldValues


Gibt eine Liste mit den Feldwerten zurück.


## Syntax

```powerquery
Record.FieldValues(
    record as record
) as list
```


## Remarks

Gibt eine Liste mit den Feldwerten im Datensatz "<code>record</code>" zurück.


## Examples

### Example #1 
Ermittelt die Feldwerte im Datensatz.
```powerquery
Record.FieldValues([CustomerID = 1, Name = "Bob", Phone = "123-4567"])
```

Result: 
```powerquery
{1, "Bob", "123-4567"}
```




## Category
Record.Selection
