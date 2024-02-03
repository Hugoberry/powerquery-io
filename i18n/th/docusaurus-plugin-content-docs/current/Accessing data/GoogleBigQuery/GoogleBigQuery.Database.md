---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

นำเข้าข้อมูลจากฐานข้อมูล Google BigQuery


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      ส่งกลับตารางที่แสดงรายการโครงการที่พร้อมใช้งานใน Google BigQuery อาจมีการระบุพารามิเตอร์ระเบียนที่เลือกได้ <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้:      <ul>        <li><code>ConnectionTimeout</code>: ระยะเวลาที่ควบคุมระยะเวลารอก่อนที่จะละทิ้งความพยายามในการเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นคือค่าหมดเวลาสำหรับการเชื่อมต่อ ODBC</li>        <li><code>CommandTimeout</code>: ระยะเวลาที่ควบคุมระยะเวลาที่คิวรีฝั่งเซิร์ฟเวอร์ได้รับอนุญาตให้เรียกใช้ก่อนที่จะถูกยกเลิก</li>        <li><code>BillingProject</code>: ID โครงการสำหรับการเรียกเก็บเงิน ค่าเริ่มต้นคือโครงการแรกที่พร้อมใช้งาน</li>        <li><code>UseStorageApi</code>: ระบุว่าจะใช้ API ของที่เก็บข้อมูล BigQuery สําหรับชุดผลลัพธ์ขนาดใหญ่หรือไม่ ค่าเริ่มต้นเป็น true เพื่อใช้ API ของที่เก็บข้อมูล ตั้งค่าเป็น false เพื่อไม่ใช้ API ของที่เก็บข้อมูล</li>      </ul>    พารามิเตอร์ระเบียนถูกระบุเป็น [option1 = value1, option2 = value2...]    


## Examples

### Example #1 
แสดงรายการโครงการที่พร้อมใช้งานใน Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



