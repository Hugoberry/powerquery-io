---
title: Record.SelectFields
---

# Record.SelectFields


ส่งกลับระเบียนที่มีเฉพาะเขตข้อมูลที่ระบุ


## Syntax

```powerquery
Record.SelectFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

ส่งกลับระเบียนที่รวมเฉพาะเขตข้อมูลที่ระบุในรายการ `fields` จากค่าที่ป้อน `record`


## Examples

### Example #1
เลือกฟิลด์ "Item" และ "Price" ในระเบียน
```powerquery
Record.SelectFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0],
    {"Item", "Price"}
)
```

Result: 
```powerquery
[Item = "Fishing rod", Price = 100]
```




## Category
Record.Selection
