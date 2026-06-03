---
title: Record.FromTable
---

# Record.FromTable


สร้างระเบียนจากตารางของฟอร์ม \{\[Name = name, Value = value\]\}


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

ส่งกลับระเบียนจากตารางของระเบียน `table` ที่มีชื่อเขตข้อมูลและชื่อค่า `{[Name = name, Value = value]}` มีข้อผิดพลาดเกิดขึ้นถ้าชื่อเขตข้อมูลไม่ซ้ำกัน


## Examples

### Example #1
สร้างระเบียนจากตารางของรูปแบบ Table.FromRecords(\{\[Name = "CustomerID", Value = 1\], \[Name = "Name", Value = "Bob"\], \[Name = "Phone", Value = "123-4567"\]\})
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
