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

Puffert eine Tabelle im Arbeitsspeicher und isoliert sie während der Auswertung von externen Änderungen. Die Pufferung ist flach. Sie erzwingt die Auswertung aller skalaren Zellwerte, lässt jedoch nicht-skalare Werte (Datensätze, Listen, Tabellen usw.) unverändert.

-   `table`: Die Tabelle, die im Arbeitsspeicher gepuffert werden soll.
-   `options`: (Optional) Die folgenden Datensatzwerte für Optionen können verwendet werden:
    -   `BufferMode`: Der Puffermodus, der den Typ der auszuführenden Pufferung beschreibt. Diese Option kann entweder `BufferMode.Eager` oder `BufferMode.Delayed` sein.

Die Verwendung dieser Funktion kann dazu führen, dass Abfragen schneller oder langsamer ausgeführt werden. In einigen Fällen kann sie die Ausführung verlangsamen, da zusätzliche Kosten für das Lesen aller Daten und deren Speicherung im Arbeitsspeicher entstehen und die Pufferung das nachgelagerte Folding verhindert. Wenn die Daten nicht gepuffert werden müssen, Sie aber nur das nachgelagerte Folding verhindern möchten, verwenden Sie stattdessen `Table.StopFolding`.


## Examples

### Example #1
Lädt all Zeilen einer SQL-Tabelle in den Arbeitsspeicher, sodass Downstream-Vorgänge den SQL Server nicht mehr abfragen können.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
