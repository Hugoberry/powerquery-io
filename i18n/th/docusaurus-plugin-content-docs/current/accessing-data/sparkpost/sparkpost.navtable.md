---
title: SparkPost.NavTable
---

# SparkPost.NavTable



## Syntax

```powerquery
SparkPost.NavTable(
    DaysToAggregate as number
) as table
```


## Remarks

ดึงตารางในตัวที่แสดงโดยตัวเชื่อม SparkPost กับข้อมูลที่รวมจำนวนวันที่ผู้ใช้ระบุไว้ เมื่อรีเฟรชตารางเหล่านี้หรือเรียกใช้ SparkPost API โดยใช้ตัวเชื่อมนี้ โปรดจำไว้ว่า SparkPost API มีขีดจำกัดอัตรา API ที่แน่นอน ถ้าคุณเห็นรหัสสถานะ 429 ถูกส่งกลับจากเซิร์ฟเวอร์ SparkPost แสดงว่าคุณมาถึงขีดจำกัดอัตราและจะต้องรอสักครู่ก่อนเรียกใช้เพิ่มเติม เมื่อเลือกค่าสำหรับพารามิเตอร์จำนวนวัน โปรดทราบว่า API จะเก็บข้อมูลไว้ 6 เดือนเท่านั้น


