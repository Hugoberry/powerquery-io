---
title: Table.FirstN
---

# Table.FirstN


## Description

Gibt die ersten x Zeilen zurück.


## Syntax

```powerquery
Table.FirstN(
    table as table,
    countOrCondition as any
) as table
```


## Details

Gibt abhängig vom <code>countOrCondition</code>-Wert die erste(n) Zeile(n) aus der Tabelle '<code>table</code>' zurück:    <ul>    <li> Ist "<code>countOrCondition</code>" eine Zahl, wird die entsprechende Anzahl von Zeilen (beginnend von oben) zurückgegeben. </li>    <li> Ist "<code>countOrCondition</code>" eine Bedingung, werden so lange Zeilen zurückgegeben, die die Bedingung erfüllen, bis eine Zeile die Bedingung nicht erfüllt.</li></ul>


## Examples

### Example #1 
Ermittelt die ersten beiden Zeilen der Tabelle.
```powerquery
Table.FirstN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
})
```


### Example #2 
Ermittelt die ersten Zeilen in der Tabelle, die die Bedingung &#34;[a] &gt; 0&#34; erfüllen.
```powerquery
Table.FirstN(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4],
        [a = -5, b = -6]
    }),
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 1, b = 2],
    [a = 3, b = 4]
})
```




## Category
Table.Row operations
