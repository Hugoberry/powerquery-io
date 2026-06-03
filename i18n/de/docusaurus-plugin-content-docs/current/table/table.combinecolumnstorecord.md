---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Kombiniert die angegebenen Spalten in einer neuen Spalte mit Datensatzwerten, in der jeder Datensatz Feldnamen und Werte enthält, die den Spaltennamen und Werten der kombinierten Spalten entsprechen.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Kombiniert die angegebenen Spalten von "`table`" in einer neuen Spalte mit Datensatzwerten namens "`newColumnName`", in der jeder Datensatz Feldnamen und Werte enthält, die den Spaltennamen und Werten der kombinierten Spalten entsprechen. Wenn ein Datensatz für "`options`" angegeben wird, können die folgenden Optionen bereitgestellt werden:

-   `DisplayNameColumn`: Bei Angabe als Text weist diese Option darauf hin, dass der angegebene Spaltenname als Anzeigename des Datensatzes behandelt werden soll. Hierbei muss es sich nicht um eine der Spalten im Datensatz selbst handeln.
-   `typeName`: Bei Angabe als Text wird der Name eines logischen Typs für den resultierenden Datensatz angegeben, der beim Datenladevorgang zum Festlegen des Verhaltens der Ladeumgebung verwendet werden kann.



## Category
Table.Transformation
