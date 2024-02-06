---
title: Table.Keys
---

# Table.Keys


指定されたテーブルのキーを返します。


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

指定されたテーブルのキーを返します。


## Examples

### Example #1 
テーブルのキーのリストを取得します。
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
