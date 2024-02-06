---
title: Table.ColumnNames
---

# Table.ColumnNames


Returnerer kolonnenavnene som en liste.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Returnerer kolonnenavnene i tabellen <code>table</code> som en liste med tekst.


## Examples

### Example #1 
Find kolonnenavnene i tabellen.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
