---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Erweitert eine Spalte mit Datensätzen in Spalten mit den einzelnen Werten.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Erstellt auf der Grundlage des Elements vom Typ "`column`" mit Datensätzen aus der Eingabe "`table`" eine Tabelle mit Spalten für die einzelnen Felder des Datensatzes. Optional kann durch Angabe von "`newColumnNames`" die Verwendung eindeutiger Spaltennamen in der neuen Tabelle sichergestellt werden.

-   `table`: Die ursprüngliche Tabelle mit der zu erweiternden Datensatzspalte.
-   `column`: Die zu erweiternde Spalte.
-   `fieldNames`: Die Liste mit Feldern, die zu Spalten in der Tabelle erweitert werden sollen.
-   `newColumnNames`: Die Liste mit den Spaltennamen für die neuen Spalten. Die neuen Spaltennamen dürfen nicht zu Duplikaten der Spalten in der neuen Tabelle führen.


## Examples

### Example #1
Erweitert die Spalte "\[a\]" in der Tabelle `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` zu drei Spalten: "aa", "bb" und "cc".
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
