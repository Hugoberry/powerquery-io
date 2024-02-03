---
title: Record.Field
---

# Record.Field


## Description

ส่งกลับค่าของเขตข้อมูลที่ระบุในระเบียน


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Details

ส่งกลับค่าของ <code>field</code> ที่ระบุใน <code>record</code> ถ้าไม่พบเขตข้อมูล ระบบจะแสดงข้อยกเว้น


## Examples

### Example #1 
ค้นหาค่าของฟิลด์ &#34;CustomerID&#34; ในระเบียน
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
