---
title: Record.ReorderFields
---

# Record.ReorderFields


จัดลำดับเขตข้อมูลที่ระบุอีกครั้งให้เป็นลำดับใหม่


## Syntax

```powerquery
Record.ReorderFields(
    record as record,
    fieldOrder as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

ส่งกลับระเบียนหลังจากจัดลำดับเขตข้อมูลใน <code>record</code> ใหม่ตามลำดับของเขตข้อมูลที่ระบุในรายการ <code>fieldOrder</code> ค่าเขตข้อมูลจะถูกคงไว้และเขตข้อมูลที่ไม่ได้แสดงรายการใน <code>fieldOrder</code> จะถูกปล่อยไว้ในตำแหน่งเดิม


## Examples

### Example #1 
เรียงลำดับฟิลด์บางฟิลด์ในระเบียนใหม่
```powerquery
Record.ReorderFields(
    [CustomerID = 1, OrderID = 1, Item = "Fishing rod", Price = 100.0],
    {"OrderID", "CustomerID"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
