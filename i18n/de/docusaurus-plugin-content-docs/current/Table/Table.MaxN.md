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

Gibt die größten Zeilen im Element vom Typ "<code>table</code>" anhand von "<code>comparisonCriteria</code>" zurück.    Nach dem Sortieren der Zeilen muss zur weiteren Filterung des Ergebnisses der Parameter "<code>countOrCondition</code>" angegeben werden. Beachten Sie, dass der Sortieralgorithmus kein festes sortiertes Ergebnis gewährleisten kann. Mögliche Formate für den Parameter "<code>countOrCondition</code>":    <ul>        <li> Bei Angabe einer Zahl wird eine Liste mit bis zu <code>countOrCondition</code> Elementen in aufsteigender Reihenfolge zurückgegeben. </li>        <li> Bei Angabe einer Bedingung wird eine Liste mit Elementen zurückgegeben, die die Bedingung erfüllen. Erfüllt ein Element die Bedingung nicht, werden ab diesem Punkt keine weiteren Elemente berücksichtigt. </li> </ul>


## Examples

### Example #1 
Ermittelt die Zeile mit dem größten Wert in der Spalte &#34;[a]&#34; mit der Bedingung &#34;[a] &gt; 0&#34; in der Tabelle. Die Zeilen werden vor dem Anwenden des Filters sortiert.
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
Ermittelt die Zeile mit dem größten Wert in der Spalte &#34;[a]&#34; mit der Bedingung &#34;[b] &gt; 0&#34; in der Tabelle. Die Zeilen werden vor dem Anwenden des Filters sortiert.
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
