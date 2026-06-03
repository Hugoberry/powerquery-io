---
title: Logical.ToText
---

# Logical.ToText


ส่งกลับ "true" หรือ "false" ที่มีการกำหนดค่าตรรกะ


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Remarks

สร้างค่าข้อความจากค่าตรรกะ `logicalValue` ซึ่งเป็น `true` หรือ `false` ถ้า `logicalValue` ไม่ใช่ค่าตรรกะ ข้อผิดพลาดจะเกิดขึ้น


## Examples

### Example #1
สร้างค่าข้อความจากตรรกะ `true`
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
