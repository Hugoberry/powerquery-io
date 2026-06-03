---
title: Logical.From
---

# Logical.From


สร้างตรรกะจากค่าที่กำหนด


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

ส่งกลับค่า `logical` จาก `value` ที่กำหนด ถ้า `value` ที่กำหนดเป็น `null` `Logical.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดเป็น `logical` จะมีการส่งกลับ `value` ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า `logical` ได้:

-   `text`: ค่า `logical` จากค่าข้อความ ซึ่งเป็น `"true"` หรือ `"false"` ดู `Logical.FromText` สำหรับรายละเอียด
-   `number`: `false` ถ้า `value` เท่ากับ `0` และ `true` ถ้าไม่ใช่

ถ้า `value` เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1
แปลง `2` เป็นค่า `logical`
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
