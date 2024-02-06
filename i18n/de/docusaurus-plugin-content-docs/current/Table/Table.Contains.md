---
title: Table.Contains
---

# Table.Contains


Gibt an, ob der angegebene Datensatz als Zeile in der Tabelle vorkommt.


## Syntax

```powerquery
Table.Contains(
    table as table,
    row as record,
    optional equationCriteria as any
) as logical
```


## Remarks

Gibt an, ob der angegebene Datensatz (<code>row</code>) als Zeile in "<code>table</code>" vorkommt.    Der Vergleich zwischen den Zeilen der Tabelle kann mithilfe eines optionalen Parameters (<code>equationCriteria</code>) gesteuert werden.


## Examples

### Example #1 
Ermittelt, ob die Tabelle die Zeile enthält.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Bob"]
)
```

Result: 
```powerquery
true
```


### Example #2 
Ermittelt, ob die Tabelle die Zeile enthält.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [Name = "Ted"]
)
```

Result: 
```powerquery
false
```


### Example #3 
Ermittelt, ob die Tabelle die Zeile enthält, wobei lediglich die Spalte &#34;[Name]&#34; verglichen wird.
```powerquery
Table.Contains(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    [CustomerID = 4, Name = "Bob"],
    "Name"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
