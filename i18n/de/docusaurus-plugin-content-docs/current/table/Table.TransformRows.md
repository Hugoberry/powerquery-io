---
title: Table.TransformRows
---

# Table.TransformRows


Transformiert die Zeilen der Tabelle unter Verwendung der angegebenen Transformationsfunktion.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Remarks

Erstellt eine <code>Liste</code>, indem der <code>transform</code>-Vorgang auf jede Zeile in <code>table</code> angewendet wird.


## Examples

### Example #1 
Transformieren Sie die Zeilen einer Tabelle in eine Liste mit Zahlen.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
Transformieren Sie die Zeilen einer numerischen Tabelle in Textdatensätze.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
