---
title: Record.FromTable
---

# Record.FromTable


## Description

สร้างระเบียนจากตารางของฟอร์ม \{[Name = name, Value = value]}


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

ส่งกลับระเบียนจากตารางของระเบียน <code>table</code> ที่มีชื่อเขตข้อมูลและชื่อค่า <code>\{[Name = name, Value = value]}</code> ระบบจะแสดงข้อยกเว้นถ้าชื่อเขตข้อมูลซ้ำกัน


## Examples

### Example #1 
สร้างระเบียนจากตารางของรูปแบบ Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]})
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
