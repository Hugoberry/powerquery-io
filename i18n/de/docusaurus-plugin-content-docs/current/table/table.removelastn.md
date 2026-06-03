---
title: Table.RemoveLastN
---

# Table.RemoveLastN


Gibt eine Tabelle zurück, aus der die letzen N Zeilen entfernt wurden.


## Syntax

```powerquery
Table.RemoveLastN(
    table as table,
    optional countOrCondition as any
) as table
```


## Remarks

Gibt eine Tabelle zurück, in der die letzten `countOrCondition` Zeilen der Tabelle "`table`" nicht enthalten sind. Wie viele Zeilen entfernt werden, hängt vom optionalen Parameter "`countOrCondition`" ab.

-   Ohne Angabe von "`countOrCondition`" wird lediglich die letzte Zeile entfernt.
-   Ist "`countOrCondition`" eine Zahl, wird die entsprechende Anzahl von Zeilen (beginnend von unten) entfernt.
-   Ist "`countOrCondition`" eine Bedingung, werden so lange Zeilen entfernt, die die Bedingung erfüllen, bis eine Zeile die Bedingung nicht erfüllt.


## Examples

### Example #1
Entfernt die letzte Zeile der Tabelle.
```powerquery
Table.RemoveLastN(
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
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2
Entfernt die letzten Zeilen in der Tabelle, die die Bedingung '\[CustomerID\] > 2' erfüllen.
```powerquery
Table.RemoveLastN(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    each [CustomerID] >= 2
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
