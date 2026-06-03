---
title: Record.FromTable
---

# Record.FromTable


Erstellt einen Datensatz auf der Grundlage einer Tabelle im Format "\{\[Name = name, Value = value\]\}".


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Gibt einen Datensatz auf der Grundlage einer Datensatztabelle (`table`) mit Feld- und Wertnamen (`{[Name = name, Value = value]}`) zurück. Wenn die Feldnamen nicht eindeutig sind, wird ein Fehler ausgelöst.


## Examples

### Example #1
Erstellt einen Datensatz auf der Grundlage der Tabelle im Format 'Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\})'.
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
