---
title: Record.AddField
---

# Record.AddField


เพิ่มเขตข้อมูลลงในระเบียน


## Syntax

```powerquery
Record.AddField(
    record as record,
    fieldName as text,
    value as any,
    optional delayed as logical
) as record
```


## Remarks

เพิ่มเขตข้อมูลลงในระเบียน <code>record</code> โดยกำหนดให้มีชื่อเขตข้อมูล <code>fieldName</code> และค่า <code>value</code>


## Examples

### Example #1 
เพิ่มที่อยู่ฟิลด์เข้าในระเบียน
```powerquery
Record.AddField([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "Address", "123 Main St.")
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567", Address = "123 Main St."]
```




## Category
Record.Transformations
