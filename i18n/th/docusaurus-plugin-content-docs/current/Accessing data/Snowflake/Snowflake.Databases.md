---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

นำเข้าข้อมูลจาก Snowflake Computing Warehouse


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

ส่งกลับตารางที่แสดงรายการตารางใน<code>warehouse</code>ของ Snowflake Computing ซึ่งอยู่ที่<code>server</code> อาจระบุพารามิเตอร์ระเบียนทางเลือก <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้ได้:<ul><li><code>Role</code>: ค่าข้อความที่จะใช้เป็นชื่อบทบาทสำหรับการเชื่อมต่อ</li><li><code>CreateNavigationProperties</code>: ค่าตรรกะ (จริง/เท็จ) ที่ตั้งค่าว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งกลับหรือไม่ (ค่าเริ่มต้นคือ จริง)</li><li><code>ConnectionTimeout</code>: จำนวนวินาทีที่รอการตอบสนองของเครือข่ายจาก Snowflake</li><li><code>CommandTimeout</code>: จำนวนวินาทีที่รอให้คิวรีดำเนินการ</li></ul>    


## Examples

### Example #1 
แสดงรายการตารางใน Snowflake Warehouse
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



