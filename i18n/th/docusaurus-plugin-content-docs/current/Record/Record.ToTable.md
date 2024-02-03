---
title: Record.ToTable
---

# Record.ToTable


## Description

ส่งกลับตารางซึ่งมีแต่ละแถวเป็นชื่อเขตข้อมูลและค่าของระเบียนค่าที่ป้อน


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

ส่งกลับตารางที่ประกอบด้วยคอลัมน์ <code>Name</code> และ <code>Value</code> ที่มีหนึ่งแถวสำหรับแต่ละเขตข้อมูลใน <code>record</code>


## Examples

### Example #1 
ส่งคืนตารางจากระเบียน
```powerquery
Record.ToTable([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "OrderID", Value = 1],
    [Name = "CustomerID", Value = 1],
    [Name = "Item", Value = "Fishing rod"],
    [Name = "Price", Value = 100]
})
```




## Category
Record.Serialization
