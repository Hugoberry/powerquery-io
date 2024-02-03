---
title: Type.ForRecord
---

# Type.ForRecord


## Description

Trả về một loại biểu thị bản ghi có ràng buộc loại cụ thể về trường.


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

Trả về một loại biểu thị bản ghi có ràng buộc loại cụ thể về trường.


## Examples

### Example #1 
Linh hoạt tạo loại bảng.
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
