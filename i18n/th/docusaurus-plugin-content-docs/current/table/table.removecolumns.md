---
title: Table.RemoveColumns
---

# Table.RemoveColumns


ย้ายคอลัมน์ที่ระบุออก


## Syntax

```powerquery
Table.RemoveColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

นำ `columns` ที่ระบุออกจาก `table` ที่กำหนดให้ ถ้าไม่มีคอลัมน์ที่กำหนดอยู่ ระบบจะแสดงข้อผิดพลาด เว้นแต่พารามิเตอร์ที่เลือกได้ `missingField` จะระบุลักษณะการทำงานอื่น (เช่น `MissingField.UseNull` หรือ `MissingField.Ignore`)


## Examples

### Example #1
นำคอลัมน์ \[Phone\] ออกจากตาราง
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Phone"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #2
ลองนำคอลัมน์ที่ไม่มีอยู่ออกจากตาราง
```powerquery
Table.RemoveColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "Address"
)
```

Result: 
```powerquery
[Expression.Error] The column 'Address' of the table wasn't found.
```




## Category
Table.Column operations
