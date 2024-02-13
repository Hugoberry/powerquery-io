---
title: Record.Combine
---

# Record.Combine


รวมระเบียนในรายการที่กำหนด


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

รวมระเบียนใน <code>records</code> ที่กำหนด ถ้า <code>records</code> มีค่าที่ไม่ใช่ระเบียน ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1 
สร้างระเบียนรวมจากระเบียน
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
