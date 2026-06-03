---
title: Record.FromList
---

# Record.FromList


Gibt einen Datensatz basierend auf einer Liste von Feldwerten und einer Gruppe von Feldern zurück.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Gibt einen Datensatz basierend auf einem/r `list` von Feldwerten und einer Gruppe von Feldern zurück. `fields` kann entweder durch eine Liste von Textwerten oder einen Datensatztyp angegeben werden. Wenn die Felder nicht eindeutig sind, wird ein Fehler ausgelöst.


## Examples

### Example #1
Erstellen Sie einen Datensatz aus einer Liste von Feldwerten und einer Liste von Feldnamen.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Erstellen Sie einen Datensatz aus einer Liste von Feldwerten und einem Datensatztyp.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
