---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


นําเข้าข้อมูลจากฐานข้อมูล Google BigQuery โดยใช้ Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่แสดงรายการโครงการที่พร้อมใช้งานใน Google BigQuery โดยใช้ Microsoft Entra ID สําหรับ `รหัสโครงการ` อาจมีการระบุพารามิเตอร์เรกคอร์ดเพิ่มเติม `ตัวเลือก` เพื่อควบคุมตัวเลือกต่อไปนี้:

-   `ConnectionTimeout`: ระยะเวลาที่ควบคุมระยะเวลาในการรอ ก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นคือค่าหมดเวลาการเชื่อมต่อ ODBC
-   `CommandTimeout`: ระยะเวลาที่ควบคุมระยะเวลาที่คิวรีฝั่งเซิร์ฟเวอร์ได้รับอนุญาตให้เรียกใช้ก่อนที่จะถูกยกเลิก
-   `UseStorageApi`: ระบุว่าจะใช้ BigQuery Storage API สําหรับชุดผลลัพธ์ขนาดใหญ่หรือไม่ ค่าเริ่มต้นจะเป็น TRUE หากต้องการใช้ Storage API ตั้งค่าเป็น FALSE หากไม่ต้องการใช้ Storage API
-   `AudienceUri`: นี่คือ URI ผู้ชม ซึ่งโปรแกรมควบคุม ODBC สามารถใช้สําหรับคําขอแลกเปลี่ยนโทเค็นได้ เขตข้อมูลนี้ต้องเป็น URI ที่มีคุณสมบัติครบถ้วน (เช่น //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) ซึ่ง pool\_id เป็นชื่อเฉพาะสากลเพื่อระบุกลุ่มบุคลากร

พารามิเตอร์ระเบียนถูกระบุเป็น \[option1 = value1, option2 = value2...\]


## Examples

### Example #1
แสดงรายการโครงการที่พร้อมใช้งานใน Google BigQuery โดยใช้ Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



