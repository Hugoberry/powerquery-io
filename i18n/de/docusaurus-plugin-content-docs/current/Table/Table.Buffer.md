---
title: Table.Buffer
---

# Table.Buffer


Puffert eine Tabelle im Arbeitsspeicher und schützt sie so während der Auswertung vor externen Änderungen.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Puffert eine Tabelle im Arbeitsspeicher und schützt sie so während der Auswertung von externen Änderungen.    Die Pufferung ist flach. Sie erzwingt die Auswertung beliebiger skalarer Zellwerte, behält jedoch nicht skalare Werte (Datensätze, Listen, Tabellen usw.) unverändert bei.     <br />    <br />    Beachten Sie, dass die Verwendung dieser Funktion dazu führen kann, dass Ihre Abfragen schneller ausgeführt werden. In einigen Fällen kann die Ausführung Ihrer Abfragen langsamer werden, aufgrund der hinzugefügten     Kosten für das Lesen aller Daten und deren Speicherung im Arbeitsspeicher sowie der Tatsache, dass die Pufferung das Nachschalten verhindert. Wenn die Daten nicht     gepuffert werden müssen, Sie aber Downstream Folding verhindern möchten, verwenden Sie stattdessen <code>Table.StopFolding</code>.


## Examples

### Example #1 
Lädt all Zeilen einer SQL-Tabelle in den Arbeitsspeicher, sodass Downstream-Vorgänge den SQL Server nicht mehr abfragen können.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(dbo_MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
