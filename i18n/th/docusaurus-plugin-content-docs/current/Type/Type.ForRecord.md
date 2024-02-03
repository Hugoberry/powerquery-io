---
title: Type.ForRecord
---

# Type.ForRecord


## Description

ส่งกลับชนิดที่แสดงระเบียนซึ่งมีข้อจำกัดชนิดเฉพาะเกี่ยวกับฟิลด์


## Syntax

```powerquery
Type.ForRecord(
    fields as record,
    open as logical
) as type
```


## Details

ส่งกลับชนิดที่แสดงระเบียนซึ่งมีข้อจำกัดชนิดเฉพาะเกี่ยวกับฟิลด์


## Examples

### Example #1 
สร้างชนิดตารางแบบไดนามิก
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
