---
title: Table.FillDown
---

# Table.FillDown


เผยแพร่ค่าของเซลล์ก่อนหน้าไปยังเซลล์ที่มีค่าเป็น Null ด้านล่างในคอลัมน์


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

ส่งกลับตารางหนึ่งจาก <code>table</code> ที่ระบุซึ่งมีการเผยแพร่ค่าของเซลล์ก่อนหน้าไปยังเซลล์ที่มีค่า Null ด้านล่าง <code>columns</code> ที่ระบุ


## Examples

### Example #1 
ส่งคืนตารางที่มีค่า Null ในคอลัมน์ [Place] ที่มีค่าสูงกว่าจากตาราง
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
