---
title: Table.MinN
---

# Table.MinN


## Description

ส่งกลับแถวที่เล็กที่สุดโดยใช้เกณฑ์ที่กำหนด


## Syntax

```powerquery
Table.MinN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Details

ส่งคืนแถวที่เล็กที่สุดใน <code>table</code> โดยกำหนดให้เป็น <code>comparisonCriteria</code> หลังจากมีการจัดเรียงแถวแล้ว จะต้องระบุพารามิเตอร์ <code>countOrCondition</code> เพื่อกรองผลลัพธ์ต่อไป หมายเหตุ อัลกอริทึ่มการจัดเรียงไม่สามารถรับประกันผลลัพธ์การจัดเรียงแบบตายตัว พารามิเตอร์ <code>countOrCondition</code> สามารถใช้ได้หลายรูปแบบ    <ul>        <li> ถ้ามีการระบุเป็นตัวเลข จะมีการส่งคืนรายการที่มีข้อมูลสูงสุด <code>countOrCondition</code> รายการตามลำดับจากน้อยไปหามาก </li>        <li> ถ้ามีการระบุเป็นเงื่อนไข จะมีการส่งคืนรายการข้อมูลแรกที่ตรงกับเงื่อนไข เมื่อรายการไม่ตรงตามตามเงื่อนไข จะไม่มีการพิจารณารายการถัดไป </li> </ul>


## Examples

### Example #1 
ค้นหาแถวที่มีค่าต่ำสุดในคอลัมน์ [a] ด้วยเงื่อนไข [a] &lt; 3 ในตาราง โดยมีการจัดเรียงแถวก่อนกำหนดใช้ตัวกรอง
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 4]
    }),
    "a",
    each [a] < 3
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 0, b = 0],
    [a = 2, b = 4]
})
```


### Example #2 
ค้นหาแถวที่มีค่าต่ำสุดในคอลัมน์ [a] ด้วยเงื่อนไข [b] &lt; 0 ในตาราง โดยมีการจัดเรียงแถวก่อนกำหนดใช้ตัวกรอง
```powerquery
Table.MinN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] < 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
