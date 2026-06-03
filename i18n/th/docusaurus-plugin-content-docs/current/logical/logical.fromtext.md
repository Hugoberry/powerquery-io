---
title: Logical.FromText
---

# Logical.FromText


สร้างค่าตรรกะจากค่าข้อความ "true" และ "false"


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

สร้างค่าตรรกะจากค่าข้อความ `text` ซึ่งเป็น "true" หรือ "false". ถ้า `text` มีสตริงอื่น จะเกิดข้อผิดพลาดขึ้น ค่าข้อความ `text` ไม่ตรงตามตัวพิมพ์ใหญ่เล็ก.


## Examples

### Example #1
สร้างค่าตรรกะจากสตริงข้อความ "true"
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
สร้างค่าตรรกะจากสตริงข้อความ "a"
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
