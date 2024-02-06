---
title: Table.Column
---

# Table.Column


Returnerar en angiven kolumn med data från tabellen som en lista.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Returnerar kolumnen med data som anges av <code>column</code> från tabellen <code>table</code> som en lista.


## Examples

### Example #1 
Hitta data i kolumnen [Name] från tabellen.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
