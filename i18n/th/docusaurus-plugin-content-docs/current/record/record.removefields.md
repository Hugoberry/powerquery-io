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

ส่งกลับระเบียนที่เอาเขตข้อมูลทั้งหมดที่ระบุในรายการ <code>fields</code> ออกจากค่าที่ป้อน <code>record</code> ถ้าไม่มีเขตข้อมูลที่ระบุ ระบบจะแสดงข้อยกเว้น


## Examples

### Example #1 
นำฟิลด์ &#34;Price&#34; ออกจากระเบียน
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
นำฟิลด์ &#34;Price&#34; และ &#34;Item&#34; ออกจากระเบียน
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
