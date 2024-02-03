---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

นำเข้าข้อมูลจาก QuickBooks Online


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        ส่งคืนค่าตารางที่แสดงรายการตารางที่มีอยู่ใน QuickBooks Online พารามิเตอร์ระเบียนเพิ่มเติม <code>options</code> อาจถูกระบุเพื่อควบคุมตัวเลือกต่อไปนี้:          <ul>            <li><code>ConnectionTimeout</code>: ระยะเวลาที่ควบคุมระยะเวลาในการรอก่อนที่จะละทิ้งความพยายามที่จะทำการเชื่อมต่อไปยังเซิร์ฟเวอร์</li>            <li><code>CommandTimeout</code>: ระยะเวลาที่ควบคุมระยะเวลาที่คิวรีฝั่งเซิร์ฟเวอร์ได้รับอนุญาตให้เรียกใช้ก่อนที่จะถูกยกเลิก</li>          </ul>        พารามิเตอร์ระเบียนถูกระบุเป็น [option1 = value1, option2 = value2...]    


