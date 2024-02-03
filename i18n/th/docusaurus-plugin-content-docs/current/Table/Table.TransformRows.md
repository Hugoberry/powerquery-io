---
title: Table.TransformRows
---

# Table.TransformRows


## Description

แปลงแถวของตารางโดยใช้ฟังก์ชันการแปลงที่ระบุ


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

สร้าง<code>รายการ</code>โดยนำการดำเนินการ <code>transform</code> ไปใช้กับแต่ละแถวใน <code>table</code>


## Examples

### Example #1 
แปลงแถวของตารางเป็นรายการตัวเลข
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
แปลงแถวของตารางตัวเลขเป็นระเบียนข้อความ
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
