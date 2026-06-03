---
title: Table.ColumnsOfType
---

# Table.ColumnsOfType


ส่งกลับรายการพร้อมชื่อของคอลัมน์ซึ่งตรงกันกับชนิดที่ระบุไว้


## Syntax

```powerquery
Table.ColumnsOfType(
    table as table,
    listOfTypes as list
) as list
```


## Remarks

ส่งกลับรายการพร้อมชื่อของคอลัมน์จากตาราง `table` ซึ่งตรงกันกับชนิดที่ระบุไว้ใน `listOfTypes`


## Examples

### Example #1
ส่งคืนชื่อคอลัมน์สำหรับชนิด Number.Type จากตาราง
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[a = 1, b = "hello"]},
        type table[a = Number.Type, b = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"a"}
```




## Category
Table.Column operations
