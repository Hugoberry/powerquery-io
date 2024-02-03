---
title: Table.ReplaceKeys
---

# Table.ReplaceKeys


## Description

Заміняє ключі вказаної таблиці.


## Syntax

```powerquery
Table.ReplaceKeys(
    table as table,
    keys as list
) as table
```


## Details

Заміняє ключі вказаної таблиці.


## Examples

### Example #1 
Замініть наявні ключі таблиці.
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    resultTable = Table.ReplaceKeys(tableWithKeys, {[Columns = {"Id"}, Primary = false]})
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
