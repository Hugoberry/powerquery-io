---
title: Table.View
---

# Table.View


## Description

Erstellt oder erweitert eine Tabelle mit benutzerdefinierten Handlern für Abfrage- und Aktionsvorgänge.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

Gibt eine Ansicht von <code>table</code> zurück. Dabei werden die in <code>handlers</code> angegebenen Funktionen anstelle des Standardverhaltens eines Vorgangs verwendet, wenn der Vorgang auf die Ansicht angewendet wird.<br />Wenn <code>table</code> angegeben ist, sind alle Handlerfunktionen optional. Wenn <code>table</code> nicht angegeben ist, sind die <code>GetType</code> and <code>GetRows</code> Handlerfunktionen erforderlich. Wenn eine Handlerfunktion für einen Vorgang nicht angegeben wird, wird stattdessen das Standardverhalten des Vorgangs auf <code>table</code> angewendet (mit Ausnahme von <code>GetExpression</code>). <br />Handlerfunktionen müssen einen Wert zurückgeben, der semantisch dem Ergebnis der Anwendung des Vorgangs auf <code>table</code> (oder im Fall von <code>GetExpression</code> der sich ergebenden Ansicht) entspricht.<br />Wenn eine Handlerfunktion einen Fehler auslöst, wird das Standardverhalten des Vorgangs auf die Ansicht angewendet.<br /><code>Table.View</code> kann zum Implementieren der Codefaltung für eine Datenquelle angewendet werden – die Übersetzung von M-Abfragen in quellspezifische Abfragen (z. B. zum Erstellen einer T-SQL-Anweisung aus M-Abfragen).<br />Eine umfassendere Beschreibung von <code>Table.View</code> finden Sie in der veröffentlichten Dokumentation.<br />


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
