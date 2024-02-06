---
title: Table.AddKey
---

# Table.AddKey


將索引鍵加入至指定的資料表類型。


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

將索引鍵加入至 <code>table</code>、指定的 <code>columns</code> 是定義索引鍵之資料行名稱的子集，而且 <code>isPrimary</code> 會指定該索引鍵是否為主索引鍵。


## Examples

### Example #1 
新增單一資料行主鍵至資料表。
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
