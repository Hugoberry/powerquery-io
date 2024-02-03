---
title: Type.ForRecord
---

# Type.ForRecord


## Description

使用欄位的特定類型條件約束，傳回代表記錄的類型。


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

使用欄位的特定類型條件約束，傳回代表記錄的類型。


## Examples

### Example #1 
動態產生資料表類型。
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
