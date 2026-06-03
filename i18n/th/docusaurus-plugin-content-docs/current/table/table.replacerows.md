---
title: Table.ReplaceRows
---

# Table.ReplaceRows


แทนที่ช่วงแถวที่ระบุด้วยแถวที่กำหนดให้


## Syntax

```powerquery
Table.ReplaceRows(
    table as table,
    offset as number,
    count as number,
    rows as list
) as table
```


## Remarks

แทนที่จำนวนแถวที่ระบุ `count` ในค่าที่ป้อน `table` ด้วย `rows` ที่ระบุโดยเริ่มต้นหลัง `offset` พารามิเตอร์ `rows` คือรายการระเบียน

-   `table`: ตารางที่จะดำเนินการแทนที่
-   `offset`: จำนวนแถวที่จะข้ามก่อนทำการแทนที่
-   `count`: จำนวนแถวที่จะแทนที่
-   `rows`: รายการของระเบียนแถวที่จะแทรกลงใน `table` ในตำแหน่งที่ระบุโดย `offset`


## Examples

### Example #1
เริ่มต้นที่ตำแหน่ง 1 แทนที่ 3 แถว
```powerquery
Table.ReplaceRows(
    Table.FromRecords({
        [Column1 = 1],
        [Column1 = 2],
        [Column1 = 3],
        [Column1 = 4],
        [Column1 = 5]
    }),
    1,
    3,
    {[Column1 = 6], [Column1 = 7]}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1],
    [Column1 = 6],
    [Column1 = 7],
    [Column1 = 5]
})
```




## Category
Table.Row operations
