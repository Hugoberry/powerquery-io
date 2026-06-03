---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


นำเข้าข้อมูลจากฐานข้อมูล Google BigQuery


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่แสดงรายการโครงการที่พร้อมใช้งานใน Google BigQuery อาจมีการระบุพารามิเตอร์เรกคอร์ดเพิ่มเติม `ตัวเลือก` เพื่อควบคุมตัวเลือกต่อไปนี้:

-   `ConnectionTimeout`: ระยะเวลาที่ควบคุมระยะเวลาในการรอ ก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นคือค่าหมดเวลาการเชื่อมต่อ ODBC
-   `CommandTimeout`: ระยะเวลาที่ควบคุมระยะเวลาที่คิวรีฝั่งเซิร์ฟเวอร์ได้รับอนุญาตให้เรียกใช้ก่อนที่จะถูกยกเลิก
-   `BillingProject`: รหัสโครงการการเรียกเก็บเงิน ค่าเริ่มต้นคือโครงการแรกที่พร้อมใช้งาน
-   `UseStorageApi`: ระบุว่าจะใช้ BigQuery Storage API สําหรับชุดผลลัพธ์ขนาดใหญ่หรือไม่ ค่าเริ่มต้นจะเป็น TRUE หากต้องการใช้ Storage API ตั้งค่าเป็น FALSE หากไม่ต้องการใช้ Storage API

พารามิเตอร์ระเบียนถูกระบุเป็น \[option1 = value1, option2 = value2...\]


## Examples

### Example #1
แสดงรายการโครงการที่พร้อมใช้งานใน Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



