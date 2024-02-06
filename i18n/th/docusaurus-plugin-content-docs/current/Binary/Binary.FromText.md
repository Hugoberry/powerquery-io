---
title: Binary.FromText
---

# Binary.FromText


ถอดรหัสข้อมูลจากรูปแบบข้อความเป็นไบนารี


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

ส่งกลับผลลัพธ์การแปลงค่าข้อความ <code>text</code> เป็นไบนารี (รายการของ <code>ตัวเลข</code>) <code>encoding</code> อาจถูกระบุเพื่อกำหนดการเข้ารหัสที่ใช้ในค่าข้อความ      อาจใช้ค่า <code>การเข้ารหัสไบนารี</code> ต่อไปนี้สำหรับ <code>encoding</code>.      <ul>        <li><code>การเข้ารหัสไบนารี.ฐาน64</code>: การเข้ารหัสแบบฐาน 64</li>        <li><code>การเข้ารหัสไบนารี.Hex</code>: การเข้ารหัส Hex</li>      </ul>


## Examples

### Example #1 
ถอดรหัส &#34;1011&#34; ในไบนารี
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
ถอดรหัส &#34;1011&#34; ในไบนารีด้วยการเข้ารหัส Hex
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
