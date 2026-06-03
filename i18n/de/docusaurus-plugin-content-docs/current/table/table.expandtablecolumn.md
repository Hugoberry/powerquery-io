---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Erweitert eine Spalte mit Datensätzen oder eine Spalte mit Tabellen zu mehreren Spalten in der enthaltenden Tabelle.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Erweitert Tabellen in "`table`\[`column`\]" zu mehrere Zeilen und Spalten. "`columnNames`" dient zum Auswählen der zu erweiternden Spalten der internen Tabelle. Geben Sie "`newColumnNames`" an, um Konflikte zwischen vorhandenen und neuen Spalten zu vermeiden.


## Examples

### Example #1
Erweitert Tabellenspalten in `[a]` in der Tabelle `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` zu drei Spalten: `[t.a]`, `[t.b]` und `[t.c]`.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
