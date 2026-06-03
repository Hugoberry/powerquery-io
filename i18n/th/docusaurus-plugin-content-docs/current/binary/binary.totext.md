---
title: Binary.ToText
---

# Binary.ToText


เข้ารหัสข้อมูลไบนารีเป็นรูปแบบข้อความ


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

ส่งกลับผลลัพธ์การแปลงรายการไบนารีของตัวเลข `binary` เป็นค่าข้อความ เพิ่มเติม `encoding` อาจถูกระบุเพื่อกำหนดการเข้ารหัสที่ใช้ในค่าข้อความที่ผลิต อาจใช้ค่า`การเข้ารหัสไบนารี` ต่อไปนี้สำหรับ `encoding`

-   `การเข้ารหัสไบนารี.ฐาน64`: การเข้ารหัสแบบฐาน 64
-   `การเข้ารหัสไบนารี.Hex`: การเข้ารหัส Hex



## Category
Binary
