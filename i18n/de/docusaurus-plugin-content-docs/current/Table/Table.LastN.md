---
title: Table.LastN
---

# Table.LastN


## Description

Gibt die angegebene Anzahl der letzten Zeilen zurück.


## Syntax

```powerquery
Table.LastN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Gibt abhängig vom <code>countOrCondition</code>-Wert die letzte(n) Zeile(n) aus der Tabelle '<code>table</code>' zurück:    <ul>    <li> Ist "<code>countOrCondition</code>" eine Zahl, wird die entsprechende Anzahl von Zeilen ab der Position "(end - <code>countOrCondition</code>)" zurückgegeben. </li>    <li> Ist "<code>countOrCondition</code>" eine Bedingung, werden in aufsteigender Richtung so lange Zeilen zurückgegeben, die die Bedingung erfüllen, bis eine Zeile die Bedingung nicht erfüllt.</li></ul>


## Examples

### Example #1 
Ermittelt die letzten beiden Zeilen der Tabelle.
```powerquery
Table.LastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Ermittelt die letzten Zeilen in der Tabelle, die die Bedingung &#34;[0] &gt; a&#34; erfüllen.
```powerquery
Table.LastN(
    Table.FromRecords({
        [a = -1, b = -2],
        [a = 3, b = 4],
        [a = 5, b = 6]
    }),
    each _ [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 3, b = 4],
    [a = 5, b = 6]
})
```




## Category
Table.Row operations
