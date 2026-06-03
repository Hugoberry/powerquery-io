---
title: Table.ReorderColumns
---

# Table.ReorderColumns


ส่งกลับตารางที่มีคอลัมน์ในลำดับที่ระบุ


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

ส่งกลับตารางจากค่าที่ป้อน `table` ที่มีคอลัมน์ในลำดับที่ระบุโดย `columnOrder`. คอลัมน์ที่ไม่ถูกระบุในรายการจะไม่ได้รับการจัดลำดับใหม่ หากคอลัมน์ดังกล่าวไม่มีอยู่ ระบบจะแสดงข้อผิดพลาด เว้นแต่พารามิเตอร์ที่เลือกได้ `missingField` จะระบุค่าสำรอง (เช่น `MissingField.UseNull` หรือ `MissingField.Ignore`)


## Examples

### Example #1
สลับเปลี่ยนลำดับของคอลัมน์ \[Phone\] และ \[Name\] ในตาราง
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
สลับเปลี่ยนลำดับของคอลัมน์ \[Phone\] และ \[Address\] หรือใช้ "MissingField.Ignore" ในตาราง โดยจะไม่มีการเปลี่ยนแปลงตาราง เนื่องจากไม่มีคอลัมน์ \[Address\] อยู่
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
