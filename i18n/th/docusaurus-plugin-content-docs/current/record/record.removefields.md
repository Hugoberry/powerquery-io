---
title: Record.RemoveFields
---

# Record.RemoveFields


เอาเขตข้อมูลที่ระบุออกจากระเบียนค่าที่ป้อน


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Remarks

ส่งกลับระเบียนที่เอาเขตข้อมูลทั้งหมดที่ระบุในรายการ `fields` ออกจากค่าที่ป้อน `record` ถ้าไม่มีเขตข้อมูลที่ระบุ หากเขตข้อมูลที่ระบุไม่พบ ระบบจะเกิดข้อผิดพลาด


## Examples

### Example #1
นำฟิลด์ "Price" ออกจากระเบียน
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2
นำฟิลด์ "Price" และ "Item" ออกจากระเบียน
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
