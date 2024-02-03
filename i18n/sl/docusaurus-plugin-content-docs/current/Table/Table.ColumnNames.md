---
title: Table.ColumnNames
---

# Table.ColumnNames


## Description

Vrne imena stolpcev kot seznam.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Details

Vrne imena stolpcev v tabeli <code>table</code> kot seznam besedila.


## Examples

### Example #1 
Poiščite imena stolpcev v tabeli.
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
