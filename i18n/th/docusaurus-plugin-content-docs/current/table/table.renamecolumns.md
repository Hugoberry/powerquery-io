---
title: Table.RenameColumns
---

# Table.RenameColumns


นำการเปลี่ยนชื่อของฟอร์ม \{old, new\} ไปใช้


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

ดำเนินการเปลี่ยนชื่อที่กำหนดให้กับคอลัมน์ในตาราง `table`. การดำเนินการแทนที่ `renames` ประกอบด้วยรายการที่มีสองค่า ได้แก่ชื่อคอลัมน์เดิมและชื่อคอลัมน์ใหม่ที่ระบุไว้ในรายการ หากคอลัมน์ดังกล่าวไม่มีอยู่ ระบบจะแสดงข้อผิดพลาด เว้นแต่พารามิเตอร์ที่เลือกได้ `missingField` จะระบุค่าสำรอง (เช่น `MissingField.UseNull` หรือ `MissingField.Ignore`)


## Examples

### Example #1
แทนที่ชื่อคอลัมน์ "CustomerNum" ด้วย "CustomerID" ในตาราง
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
แทนที่ชื่อคอลัมน์ "CustomerNum" ด้วย "CustomerID" และ "PhoneNum" ด้วย "Phone" ในตาราง
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
แทนที่ชื่อคอลัมน์ "NewCol" ด้วย "NewColumn" ในตาราง และละเว้นหากไม่มีคอลัมน์อยู่
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
