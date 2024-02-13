---
title: Table.AddKey
---

# Table.AddKey


Fügt einer Tabelle einen Schlüssel hinzu.


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

Fügt <code>table</code> einen Schlüssel hinzu, wobei <code>columns</code> die Liste der Spaltennamen ist, die den Schlüssel definiert, und <code>isPrimary</code> gibt an, ob es sich um den Primärschlüssel handelt.


## Examples

### Example #1 
Fügen Sie einer Tabelle einen einspaltigen Primärschlüssel hinzu.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    resultTable = Table.AddKey(table, {"Id"}, true)
in
    resultTable
```

Result: 
```powerquery
Table.FromRecords({
    [Id = 1, Name = "Hello There"],
    [Id = 2, Name = "Good Bye"]
})
```




## Category
Table.Transformation
