---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Expanderar en kolumn med poster till kolumner med varje värde.


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

Baserat på `column` med poster i indataposten `table` skapas en tabell med en kolumn för varje fält i posten. `newColumnNames` kan anges för att säkerställa att kolumnerna i den nya tabellen är unika.

-   `table`: Den ursprungliga tabellen med den postkolumn som ska expanderas.
-   `column`: Kolumnen som ska expanderas.
-   `fieldNames`: Listan med fält som ska expanderas till kolumner i tabellen.
-   `newColumnNames`: Listan med kolumnnamn som ska få de nya kolumnerna. De nya kolumnnamnen kan inte duplicera en kolumn i den nya tabellen.


## Examples

### Example #1
Expandera kolumnen \[a\] i tabellen `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` till 3 kolumner: "aa", "bb" och "cc".
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
