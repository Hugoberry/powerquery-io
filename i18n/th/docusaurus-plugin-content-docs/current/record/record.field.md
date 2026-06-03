---
title: Record.Field
---

# Record.Field


ส่งกลับค่าของเขตข้อมูลที่ระบุในระเบียน


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

ส่งกลับค่าของ `field` ที่ระบุใน `record` ถ้าไม่พบเขตข้อมูล ถ้าไม่พบฟิลด์ ระบบจะแจ้งข้อผิดพลาด


## Examples

### Example #1
ค้นหาค่าของฟิลด์ "CustomerID" ในระเบียน
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
