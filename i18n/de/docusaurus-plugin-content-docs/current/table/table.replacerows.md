---
title: Table.ReplaceRows
---

# Table.ReplaceRows


Ersetzt den angegebenen Zeilenbereich durch die bereitgestellten Zeilen.


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

Ersetzt eine angegebene Anzahl von Zeilen (`count`) in der Eingabe "`table`" durch die Elemente vom Typ "`rows`" (beginnend ab "`offset`"). Der Parameter "`rows`" ist eine Liste mit Datensätzen.

-   `table`: Die Tabelle, in der die Ersetzung ausgeführt wird.
-   `offset`: Die Anzahl von Zeilen, die vor der Ersetzung übersprungen werden sollen.
-   `count`: Die Anzahl der zu ersetzenden Zeilen.
-   `rows`: Die Liste mit den Zeilendatensätzen, die an der durch "`offset`" angegebenen Position in "`table`" eingefügt werden sollen.


## Examples

### Example #1
Ersetzt ab Position 1 drei Zeilen in der Tabelle.
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
