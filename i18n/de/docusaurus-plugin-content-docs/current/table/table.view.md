---
title: Table.View
---

# Table.View


Erstellt oder erweitert eine Tabelle mit benutzerdefinierten Handlern für Abfrage- und Aktionsvorgänge.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Gibt eine Ansicht von `table` zurück. Dabei werden die in `handlers` angegebenen Funktionen anstelle des Standardverhaltens eines Vorgangs verwendet, wenn der Vorgang auf die Ansicht angewendet wird.

Wenn `table` angegeben ist, sind alle Handlerfunktionen optional. Wenn `table` nicht angegeben ist, sind die `GetType` and `GetRows` Handlerfunktionen erforderlich. Wenn eine Handlerfunktion für einen Vorgang nicht angegeben wird, wird stattdessen das Standardverhalten des Vorgangs auf `table` angewendet (mit Ausnahme von `GetExpression`).

Handlerfunktionen müssen einen Wert zurückgeben, der semantisch dem Ergebnis der Anwendung des Vorgangs auf `table` (oder im Fall von `GetExpression` der sich ergebenden Ansicht) entspricht.

Wenn eine Handlerfunktion einen Fehler auslöst, wird das Standardverhalten des Vorgangs auf die Ansicht angewendet.

`Table.View` kann zum Implementieren der Codefaltung für eine Datenquelle angewendet werden – die Übersetzung von M-Abfragen in quellspezifische Abfragen (z. B. zum Erstellen einer T-SQL-Anweisung aus M-Abfragen).

Eine umfassendere Beschreibung von `Table.View` finden Sie in der veröffentlichten Dokumentation.


## Examples

### Example #1
Erstellen Sie eine einfache Ansicht, für die kein Zugriff auf die Zeilen erforderlich ist, um den Typ oder die Zeilenanzahl zu bestimmen.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
