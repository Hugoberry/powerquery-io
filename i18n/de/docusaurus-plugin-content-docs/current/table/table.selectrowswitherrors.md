---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


Gibt eine Tabelle zurück, die nur die Zeilen aus der Eingabetabelle enthält, die in mindestens einer der Zellen einen Fehler enthalten. Bei Angabe einer Spaltenliste werden nur die Zellen der angegebenen Spalten auf Fehler geprüft.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

Gibt eine Tabelle zurück, die nur die Zeilen aus der Eingabetabelle enthält, die in mindestens einer der Zellen einen Fehler enthalten. Bei Angabe einer Spaltenliste werden nur die Zellen der angegebenen Spalten auf Fehler geprüft.


## Examples

### Example #1 
Auswählen von Namen von Kunden mit Fehlern in ihren Zeilen.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
