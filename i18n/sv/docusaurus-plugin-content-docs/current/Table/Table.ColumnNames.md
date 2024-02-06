---
title: Table.ColumnNames
---

# Table.ColumnNames


Returnerar kolumnnamnen som en lista.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Returnerar kolumnnamnen i tabellen <code>table</code> som en lista med text.


## Examples

### Example #1 
Hitta kolumnnamnen för tabellen.
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
