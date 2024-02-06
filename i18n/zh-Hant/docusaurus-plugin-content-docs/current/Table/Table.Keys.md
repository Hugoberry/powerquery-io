---
title: Table.Keys
---

# Table.Keys


傳回指定資料表的索引鍵。


## Syntax

```powerquery
Table.Keys(
    table as table
) as list
```


## Remarks

傳回指定資料表的索引鍵。


## Examples

### Example #1 
取得資料表的索引鍵清單。
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
