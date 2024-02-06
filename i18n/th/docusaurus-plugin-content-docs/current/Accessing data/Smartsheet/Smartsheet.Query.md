---
title: Smartsheet.Query
---

# Smartsheet.Query


นำกลับผลลัพธ์ JSON จาก API ของ Smartsheet


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

เรียกหา Smartsheet 2.0 REST API ที่จุดแสดงผลเฉพาะและเปลี่ยนส่วนประกอบของข้อมูลที่ถูกนำกลับไปยังบันทึก JSON


## Examples

### Example #1 
ดึงข้อมูลจากชีทที่จุดแสดงผล API ของ Smartsheet พร้อมด้วยอาร์กิวเมนต์เพิ่มเติมเฉพาะ
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
ตารางพร้อมด้วยข้อมูลตามที่ถูกนำกลับโดย API ของ Smartsheet
```



