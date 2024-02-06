---
title: Record.RenameFields
---

# Record.RenameFields


นำการเปลี่ยนชื่อจากรายการในฟอร์ม \{ old, new } ไปใช้


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

ส่งกลับระเบียนหลังจากเปลี่ยนชื่อเขตข้อมูลในค่าที่ป้อน <code>record</code> เป็นชื่อเขตข้อมูลใหม่ที่ระบุในรายการ <code>renames</code> สำหรับการเปลี่ยนชื่อหลายรายการ สามารถใช้รายการที่ซ้อนกันได้ (\{ \{old1, new1}, \{old2, new2} }


## Examples

### Example #1 
เปลี่ยนชื่อฟิลด์ &#34;UnitPrice&#34; เป็น &#34;Price&#34; จากระเบียน
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2 
เปลี่ยนชื่อฟิลด์ &#34;UnitPrice&#34; เป็น &#34;Price&#34; และ &#34;OrderNum&#34; เป็น &#34;OrderID&#34; จากระเบียน
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
