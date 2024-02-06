---
title: Type.ForRecord
---

# Type.ForRecord


フィールドに対して特定の型の制約を持つレコードを表す型を返します。


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

フィールドに対して特定の型の制約を持つレコードを表す型を返します。


## Examples

### Example #1 
テーブル型を動的に生成します。
```powerquery
let
    columnNames = {"Name", "Score"},
    columnTypes = {type text, type number},
    rowColumnTypes = List.Transform(columnTypes, (t) => [Type = t, Optional = false]),
    rowType = Type.ForRecord(Record.FromList(rowColumnTypes, columnNames), false)
in
    #table(type table rowType, {{"Betty", 90.3}, {"Carl", 89.5}})
```

Result: 
```powerquery
#table(
    type table [Name = text, Score = number],
    {{"Betty", 90.3}, {"Carl", 89.5}}
)
```




## Category
Type
