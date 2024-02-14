---
title: Table.RemoveRowsWithErrors
---

# Table.RemoveRowsWithErrors


ส่งกลับตารางซึ่งมีแถวที่ถูกเอาออกจากตารางค่าที่ป้อนที่มีข้อผิดพลาดในเซลล์อย่างน้อยหนึ่งเซลล์ ถ้าระบุรายการคอลัมน์ จะมีการตรวจสอบหาข้อผิดพลาดเฉพาะเซลล์ในคอลัมน์ที่ระบุ


## Syntax

```powerquery
Table.RemoveRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Remarks

ส่งกลับตารางซึ่งมีแถวที่ถูกเอาออกจากตารางค่าที่ป้อนที่มีข้อผิดพลาดในเซลล์อย่างน้อยหนึ่งเซลล์ ถ้าระบุรายการคอลัมน์ จะมีการตรวจสอบหาข้อผิดพลาดเฉพาะเซลล์ในคอลัมน์ที่ระบุ


## Examples

### Example #1 
ลบค่าของข้อผิดพลาดออกจากแถวแรก
```powerquery
Table.RemoveRowsWithErrors(
    Table.FromRecords({
        [Column1 = ...],
        [Column1 = 2],
        [Column1 = 3]
    })
)
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 2],
    [Column1 = 3]
})
```




## Category
Table.Row operations
