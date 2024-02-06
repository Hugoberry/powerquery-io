---
title: Table.ReplaceKeys
---

# Table.ReplaceKeys


Replaces the keys of the specified table.


## Syntax

```powerquery
Table.ReplaceKeys(
    table as table,
    keys as list
) as table
```


## Remarks

Replaces the keys of the specified table.


## Examples

### Example #1 
Replace the existing keys of a table.
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
