---
title: Record.HasFields
---

# Record.HasFields


ระบุว่าระเบียนมีเขตข้อมูลที่ระบุหรือไม่


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

ระบุว่าระเบียน `record` มีเขตข้อมูลที่ระบุใน `fields` หรือไม่โดยการส่งกลับค่าตรรกะ (true หรือ false) ค่าเขตข้อมูลหลายค่าสามารถระบุได้โดยใช้รายการเดียว


## Examples

### Example #1
ตรวจสอบว่าระเบียนมีฟิลด์ "CustomerID" อยู่หรือไม่
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
ตรวจสอบว่าระเบียนมีฟิลด์ "CustomerID" และ "Address" อยู่หรือไม่
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
