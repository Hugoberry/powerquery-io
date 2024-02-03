---
title: Table.ReplaceKeys
---

# Table.ReplaceKeys


## Description

Thay thế các khóa của bảng được chỉ định.


## Syntax

```powerquery
Table.ReplaceKeys(
    table as table,
    keys as list
) as table
```


## Details

Thay thế các khóa của bảng được chỉ định.


## Examples

### Example #1 
Thay thế các khóa hiện có của bảng.
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
