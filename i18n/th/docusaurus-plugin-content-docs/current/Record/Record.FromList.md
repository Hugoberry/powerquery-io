---
title: Record.FromList
---

# Record.FromList


## Description

ส่งกลับระเบียนโดยมีหนึ่งรายการค่าเขตข้อมูลและหนึ่งชุดเขตข้อมูล


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Details

ส่งกลับระเบียนโดยมี <code>list</code> ค่าเขตข้อมูลและหนึ่งชุดเขตข้อมูล  <code>fields</code> สามารถระบุได้โดยรายการค่าข้อความหรือชนิดระเบียน  ระบบจะแสดงข้อผิดพลาดถ้าเขตข้อมูลซ้ำกัน


## Examples

### Example #1 
สร้างระเบียนจากรายการค่าเขตข้อมูลและรายการชื่อเขตข้อมูล
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
สร้างระเบียนจากรายการค่าเขตข้อมูลและชนิดระเบียน
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
