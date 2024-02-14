---
title: Table.FillUp
---

# Table.FillUp


เผยแพร่ค่าของเซลล์ไปยังเซลล์ที่มีค่าเป็น Null ด้านบนในคอลัมน์


## Syntax

```powerquery
Table.FillUp(
    table as table,
    columns as list
) as table
```


## Remarks

ส่งกลับตารางหนึ่งจาก <code>table</code> ที่ระบุซึ่งมีการเผยแพร่ค่าของเซลล์ถัดไปไปยังเซลล์ที่มีค่า Null ด้านบน <code>columns</code> ที่ระบุ


## Examples

### Example #1 
ส่งคืนตารางที่มีค่า Null ในคอลัมน์ [Column2] ที่มีค่าต่ำกว่าจากตาราง
```powerquery
Table.FillUp(
    Table.FromRecords({
        [Column1 = 1, Column2 = 2],
        [Column1 = 3, Column2 = null],
        [Column1 = 5, Column2 = 3]
    }),
    {"Column2"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2],
    [Column1 = 3, Column2 = 3],
    [Column1 = 5, Column2 = 3]
})
```




## Category
Table.Transformation
