---
title: Snowflake.Databases
---

# Snowflake.Databases


นำเข้าข้อมูลจาก Snowflake Computing Warehouse


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่แสดงรายการตารางใน`warehouse`ของ Snowflake Computing ซึ่งอยู่ที่`server` อาจระบุพารามิเตอร์ระเบียนทางเลือก `options` เพื่อควบคุมตัวเลือกต่อไปนี้ได้:

-   `Role`: ค่าข้อความที่จะใช้เป็นชื่อบทบาทสำหรับการเชื่อมต่อ
-   `CreateNavigationProperties`: ค่าตรรกะ (จริง/เท็จ) ที่ตั้งค่าว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งกลับหรือไม่ (ค่าเริ่มต้นคือ จริง)
-   `ConnectionTimeout`: จำนวนวินาทีที่รอการตอบสนองของเครือข่ายจาก Snowflake
-   `CommandTimeout`: จำนวนวินาทีที่รอให้คิวรีดำเนินการ


## Examples

### Example #1
แสดงรายการตารางใน Snowflake Warehouse
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



