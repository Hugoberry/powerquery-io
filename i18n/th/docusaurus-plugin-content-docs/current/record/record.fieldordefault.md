---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


ส่งกลับค่าของเขตข้อมูลที่ระบุในระเบียนหรือค่าเริ่มต้น ถ้าไม่พบเขตข้อมูล


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

ส่งกลับค่าของเขตข้อมูลที่ระบุ `field` ในระเบียน `record` ถ้าไม่พบเขตข้อมูล จะมีการส่งกลับ `defaultValue` ที่เป็นทางเลือก


## Examples

### Example #1
ค้นหาค่าของฟิลด์ "Phone" ในระเบียน หรือส่งคืนเป็นค่า Null ถ้าไม่มีค่านั้นอยู่
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
ค้นหาค่าของฟิลด์ "Phone" ในระเบียน หรือส่งคืนเป็นค่าเริ่มต้น ถ้าไม่มีค่านั้นอยู่
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
