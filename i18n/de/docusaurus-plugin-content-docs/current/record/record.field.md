---
title: Record.Field
---

# Record.Field


Gibt den Wert des angegebenen Felds in einem Datensatz zurück.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Gibt den Wert des angegebenen Elements vom Typ „`field`“ in „`record`“ zurück. Wenn das Feld nicht gefunden wird, wird ein Fehler ausgelöst.


## Examples

### Example #1
Ermittelt den Wert des Felds 'CustomerID' im Datensatz.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
