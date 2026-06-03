---
title: Table.RemoveFirstN
---

# Table.RemoveFirstN


Gibt eine Tabelle zurück, in der die ersten x Zeilen übersprungen wurden.


## Syntax

```powerquery
Table.RemoveFirstN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Gibt eine Tabelle zurück, in der die angegebene Anzahl von Zeilen (`countOrCondition`, beginnend von oben) der Tabelle "`table`" nicht enthalten ist. Wie viele Zeilen entfernt werden, hängt vom optionalen Parameter "`countOrCondition`" ab.

-   Ohne Angabe von "`countOrCondition`" wird lediglich die erste Zeile entfernt.
-   Ist "`countOrCondition`" eine Zahl, wird die entsprechende Anzahl von Zeilen (beginnend von oben) entfernt.
-   Ist "`countOrCondition`" eine Bedingung, werden so lange Zeilen entfernt, die die Bedingung erfüllen, bis eine Zeile die Bedingung nicht erfüllt.


## Examples

### Example #1
Entfernt die erste Zeile der Tabelle.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #2
Entfernt die ersten beiden Zeilen der Tabelle.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```


### Example #3
Entfernt die ersten Zeilen in der Tabelle, die die Bedingung '\[CustomerID\] &lt;= 2' erfüllen.
```powerquery
Table.RemoveFirstN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] <= 2
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
    [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
})
```




## Category
Table.Row operations
