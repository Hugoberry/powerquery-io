---
title: Table.Keys
---

# Table.Keys


返回指定表的键。


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

返回指定表的键。


## Examples

### Example #1 
获取表的键列表。
```powerquery
let
    table = Table.FromRecords({
        [Id = 1, Name = "Hello There"],
        [Id = 2, Name = "Good Bye"]
    }),
    tableWithKeys = Table.AddKey(table, {"Id"}, true),
    keys = Table.Keys(tableWithKeys)
in
    keys
```

Result: 
```powerquery
{[Columns = {"Id"}, Primary = true]}
```




## Category
Table.Transformation
