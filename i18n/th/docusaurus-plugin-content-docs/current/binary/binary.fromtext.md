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

ส่งกลับผลลัพธ์การแปลงค่าข้อความ `text` เป็นไบนารี (รายการของ `ตัวเลข`) `encoding` อาจถูกระบุเพื่อกำหนดการเข้ารหัสที่ใช้ในค่าข้อความ อาจใช้ค่า `การเข้ารหัสไบนารี` ต่อไปนี้สำหรับ `encoding`.

-   `การเข้ารหัสไบนารี.ฐาน64`: การเข้ารหัสแบบฐาน 64
-   `การเข้ารหัสไบนารี.Hex`: การเข้ารหัส Hex


## Examples

### Example #1
ถอดรหัส "1011" ในไบนารี
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
ถอดรหัส "1011" ในไบนารีด้วยการเข้ารหัส Hex
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
