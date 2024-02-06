---
title: Table.ContainsAll
---

# Table.ContainsAll


Gibt an, ob alle angegebenen Datensätze als Zeilen in der Tabelle vorkommen.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Gibt an, ob alle angegebenen Datensätze in der Liste mit Datensätzen (<code>rows</code>) als Zeilen in "<code>table</code>" vorkommen.    Der Vergleich zwischen den Zeilen der Tabelle kann mithilfe eines optionalen Parameters (<code>equationCriteria</code>) gesteuert werden.


## Examples

### Example #1 
Ermittelt, ob die Tabelle alle Zeilen enthält. Dabei wird nur die Spalte [CustomerID] verglichen.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob die Tabelle alle Zeilen enthält.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
