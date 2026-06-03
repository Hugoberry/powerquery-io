---
title: Binary.From
---

# Binary.From


สร้างไบนารีจากค่าที่กำหนด


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

ส่งกลับค่า `binary` จาก `value` ที่กำหนด ถ้า `value` ที่กำหนดให้เป็น `null` `Binary.From` จะส่งกลับ `null` ถ้า `value` ที่กำหนดให้เป็น `binary` จะมีการส่งกลับ `value` ค่าของชนิดต่อไปนี้สามารถแปลงเป็นค่า `binary` ได้:

-   `text`: ค่า `binary` จากการแสดงข้อความ ดู `Binary.FromText` สำหรับรายละเอียด

ถ้า `value` เป็นชนิดอื่น ระบบจะส่งกลับข้อผิดพลาด


## Examples

### Example #1
รับค่า `binary` ของ `"1011"`
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
