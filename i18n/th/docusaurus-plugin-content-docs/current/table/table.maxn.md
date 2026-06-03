---
title: Table.MaxN
---

# Table.MaxN


ส่งกลับแถวที่ใหญ่ที่สุดโดยใช้เกณฑ์ที่กำหนด


## Syntax

```powerquery
Table.MaxN(
    table as table,
    comparisonCriteria as any,
    countOrCondition as any
) as table
```


## Remarks

ส่งคืนแถวที่ใหญ่ที่สุดใน `table` โดยกำหนดให้เป็น `comparisonCriteria` หลังจากมีการจัดเรียงแถวแล้ว จะต้องระบุพารามิเตอร์ `countOrCondition` เพื่อกรองผลลัพธ์ต่อไป หมายเหตุ อัลกอริทึ่มการจัดเรียงไม่สามารถรับประกันผลลัพธ์การจัดเรียงแบบตายตัวได้ พารามิเตอร์ `countOrCondition` สามารถใช้ได้หลายรูปแบบ:

-   ถ้ามีการระบุเป็นตัวเลข จะมีการส่งคืนรายการที่มีข้อมูลสูงสุด `countOrCondition` รายการตามลำดับจากน้อยไปหามาก
-   ถ้ามีการระบุเงื่อนไข จะมีการส่งกลับรายการข้อมูลที่ตรงกับเงื่อนไขแรก เมื่อรายการไม่ตรงตามเงื่อนไข จะไม่มีการพิจารณารายการถัดไป


## Examples

### Example #1
ค้นหาแถวที่มีค่ามากที่สุดในคอลัมน์ \[a\] ด้วยเงื่อนไข \[a\] > 0 ในตาราง โดยมีการจัดเรียงแถวก่อนกำหนดใช้ตัวกรอง
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 0, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [a] > 0
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = 6, b = 2],
    [a = 2, b = 4]
})
```


### Example #2
ค้นหาแถวที่มีค่ามากที่สุดในคอลัมน์ \[a\] ด้วยเงื่อนไข \[b\] > 0 ในตาราง โดยมีการจัดเรียงแถวก่อนกำหนดใช้ตัวกรอง
```powerquery
Table.MaxN(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 8, b = 0],
        [a = 6, b = 2]
    }),
    "a",
    each [b] > 0
)
```

Result: 
```powerquery
Table.FromRecords({})
```




## Category
Table.Ordering
