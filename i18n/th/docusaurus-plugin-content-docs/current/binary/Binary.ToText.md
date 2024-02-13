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

ส่งกลับผลลัพธ์การแปลงรายการไบนารีของตัวเลข <code>binary</code> เป็นค่าข้อความ เพิ่มเติม <code>encoding</code> อาจถูกระบุเพื่อกำหนดการเข้ารหัสที่ใช้ในค่าข้อความที่ผลิต      อาจใช้ค่า<code>การเข้ารหัสไบนารี</code> ต่อไปนี้สำหรับ <code>encoding</code>      <ul>        <li><code>การเข้ารหัสไบนารี.ฐาน64</code>: การเข้ารหัสแบบฐาน 64</li>        <li><code>การเข้ารหัสไบนารี.Hex</code>: การเข้ารหัส Hex</li>      </ul>



## Category
Binary
