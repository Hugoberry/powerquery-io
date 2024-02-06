---
title: Smartsheet.Content
---

# Smartsheet.Content


น้ำกลับข้อมูลตารางจากจุดแสดงผลดัชนีของ Smartsheet


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

เรียกหา Smartsheet 2.0 REST API ที่จุดแสดงผลเฉพาะและเปลี่ยนส่วนประกอบของข้อมูลที่ถูกนำกลับไปยังตาราง


## Examples

### Example #1 
ดึงตารางของข้อมูลผู้ใช้งานจาก API ของ Smartsheet
```powerquery
Smartsheet.Content ("ผู้ใช้งาน")
```

Result: 
```powerquery
ตารางพร้อมด้วยข้อมูลผู้ใช้งานตามที่ถูกนำกลับโดย API ของ Smartsheet
```



