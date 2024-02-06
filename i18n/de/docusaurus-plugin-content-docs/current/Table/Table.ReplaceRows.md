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

Ersetzt eine angegebene Anzahl von Zeilen (<code>count</code>) in der Eingabe "<code>table</code>" durch die Elemente vom Typ "<code>rows</code>" (beginnend ab "<code>offset</code>"). Der Parameter "<code>rows</code>" ist eine Liste mit Datensätzen.    <ul>       <li><code>table</code>: Die Tabelle, in der die Ersetzung ausgeführt wird.</li>       <li><code>offset</code>: Die Anzahl von Zeilen, die vor der Ersetzung übersprungen werden sollen.</li>       <li><code>count</code>: Die Anzahl der zu ersetzenden Zeilen.</li>       <li><code>rows</code>: Die Liste mit den Zeilendatensätzen, die an der durch "<code>offset</code>" angegebenen Position in "<code>table</code>" eingefügt werden sollen.</li>    </ul>


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
