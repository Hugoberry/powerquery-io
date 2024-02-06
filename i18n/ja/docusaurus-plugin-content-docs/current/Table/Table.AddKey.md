---
title: Table.AddKey
---

# Table.AddKey


指定されたテーブル型にキーを追加します。


## Syntax

```powerquery
Table.AddKey(
    table as table,
    columns as list,
    isPrimary as logical
) as table
```


## Remarks

<code>table</code> にキーを追加します。なお、<code>columns</code> は、キーを定義する列名のリストで、<code>isPrimary</code> はキーが主キーかどうかを指定します。


## Examples

### Example #1 
単一列の主キーをテーブルに追加します。
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
