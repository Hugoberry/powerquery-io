---
title: Netezza.Database
---

# Netezza.Database


## Description

นำเข้าข้อมูลจากฐานข้อมูล IBM Netezza


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

ส่งกลับตารางของตาราง Netezza มุมมอง และฟังก์ชันที่จัดเก็บไว้จากฐานข้อมูลเซิร์ฟเวอร์ Netezza <code>ฐานข้อมูล</code> บนเซิร์ฟเวอร์ <code>เซิร์ฟเวอร์</code> อาจเลือกระบุพอร์ตร่วมกับเซิร์ฟเวอร์ได้โดยคั่นด้วยเครื่องหมายทวิภาค อาจระบุพารามิเตอร์ระเบียนเพิ่มเติม <code>ตัวเลือก</code> เพื่อควบคุมตัวเลือกต่อไปนี้:<ul>        <li><code>CreateNavigationProperties</code>: ค่าตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งกลับหรือไม่ (ค่าเริ่มต้นคือ จริง)</li>        <li><code>HierarchicalNavigation</code>: ค่าตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะดูตารางที่จัดกลุ่มตามชื่อ Schema หรือไม่ (ค่าเริ่มต้นคือ เท็จ)</li>        <li><code>ConnectionTimeout</code>: ระยะเวลาที่ควบคุมเวลาที่รอก่อนที่จะละทิ้งความพยายามในการเชื่อมต่อเซิร์ฟเวอร์ โดยค่าเริ่มต้นจะขึ้นอยู่กับโปรแกรมควบคุม</li>        <li><code>CommandTimeout</code>: ระยะเวลาที่ควบคุมเวลาที่อนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานก่อนที่จะยกเลิก โดยค่าเริ่มต้นจะขึ้นอยู่กับโปรแกรมควบคุม</li><li><code>NormalizeDatabaseName</code>: ค่าตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะทำให้ชื่อฐานข้อมูลเป็นมาตรฐานด้วยตัวพิมพ์ใหญ่หรือตีความตามตัวอักษร (ค่าเริ่มต้นคือ จริง)</li></ul>พารามิเตอร์ระเบียนถูกระบุเป็น [option1 = value1, option2 = value2...]


## Examples

### Example #1 
แสดงรายการตารางในโครงการ IBM Netezza
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



