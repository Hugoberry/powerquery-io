---
title: Type.ForRecord
---

# Type.ForRecord


返回一个类型，此类型表示对字段具有特定类型约束的记录。


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Remarks

返回一个类型，此类型表示对字段具有特定类型约束的记录。


## Examples

### Example #1 
动态生成表类型。
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
