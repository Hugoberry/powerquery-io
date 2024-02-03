---
title: Table.ReplaceKeys
---

# Table.ReplaceKeys


## Description

Заменяет ключи указанной таблицы.


## Syntax

```powerquery
Table.ReplaceKeys(
    table as table,
    keys as list
) as table
```


## Details

Заменяет ключи указанной таблицы.


## Examples

### Example #1 
Замена существующих ключей таблицы.
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
