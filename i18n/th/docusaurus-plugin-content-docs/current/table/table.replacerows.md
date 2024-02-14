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

แทนที่จำนวนแถวที่ระบุ <code>count</code> ในค่าที่ป้อน <code>table</code> ด้วย <code>rows</code> ที่ระบุโดยเริ่มต้นหลัง <code>offset</code> พารามิเตอร์ <code>rows</code> คือรายการระเบียน    <ul>       <li><code>table</code>: ตารางที่จะดำเนินการแทนที่</li>       <li><code>offset</code>: จำนวนแถวที่จะข้ามก่อนทำการแทนที่</li>       <li><code>count</code>: จำนวนแถวที่จะแทนที่</li>       <li><code>rows</code>: รายการของระเบียนแถวที่จะแทรกลงใน <code>table</code> ในตำแหน่งที่ระบุโดย <code>offset</code></li>    </ul>


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
