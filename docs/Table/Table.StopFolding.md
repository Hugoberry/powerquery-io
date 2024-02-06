---
title: Table.StopFolding
---

# Table.StopFolding


Prevents any downstream operations from being run against the original source of the data.


## Syntax

```powerquery
Table.StopFolding(
    table as table
) as table
```


## Remarks

Prevents any downstream operations from being run against the original source of the data in <code>table</code>.


## Examples

### Example #1 
Fetches data from a SQL table in a way that prevents any downstream operations from running as a query on the SQL server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    MyLocalTable = Table.StopFolding(dbo_MyTable)
in
    MyLocalTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
