---
title: Table.MaxN
---

# Table.MaxN


Gibt anhand der angegebenen Kriterien die größten Zeilen zurück.


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

Gibt die größten Zeilen im Element vom Typ "`table`" anhand von "`comparisonCriteria`" zurück. Nach dem Sortieren der Zeilen muss zur weiteren Filterung des Ergebnisses der Parameter "`countOrCondition`" angegeben werden. Beachten Sie, dass der Sortieralgorithmus kein festes sortiertes Ergebnis gewährleisten kann. Mögliche Formate für den Parameter "`countOrCondition`":

-   Bei Angabe einer Zahl wird eine Liste mit bis zu `countOrCondition` Elementen in aufsteigender Reihenfolge zurückgegeben.
-   Bei Angabe einer Bedingung wird eine Liste mit Elementen zurückgegeben, die die Bedingung erfüllen. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt.


## Examples

### Example #1
Ermittelt die Zeile mit dem größten Wert in der Spalte "\[a\]" mit der Bedingung "\[a\] > 0" in der Tabelle. Die Zeilen werden vor dem Anwenden des Filters sortiert.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2
Ermittelt die Zeile mit dem größten Wert in der Spalte "\[a\]" mit der Bedingung "\[b\] > 0" in der Tabelle. Die Zeilen werden vor dem Anwenden des Filters sortiert.
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
