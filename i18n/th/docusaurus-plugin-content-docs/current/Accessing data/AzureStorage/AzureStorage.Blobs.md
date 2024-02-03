---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

ส่งกลับตารางการนำทางที่มีคอนเทนเนอร์ที่พบในบัญชีที่ระบุจากชุดเก็บข้อมูลประจำตัวที่จัดเก็บ Azure


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

ส่งกลับตารางการนำทางที่มีแถวของแต่ละคอนเทนเนอร์ที่พบใน URL บัญชี <code>account</code> จากชุดเก็บข้อมูลประจำตัวที่จัดเก็บ Azure แต่ละแถวประกอบด้วยการเชื่อมโยงไปยัง blob ของคอนเทนเนอร์ อาจมีการระบุ <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้:    <ul><li><code>BlockSize</code> : จำนวนไบต์ที่อ่านก่อนรอผู้ใช้ข้อมูล ค่าเริ่มต้นคือ 4 MB</li><li><code>RequestSize</code> : จำนวนไบต์ที่พยายามอ่านในการร้องขอทาง HTTP แบบเดี่ยวไปยังเซิร์ฟเวอร์ ค่าเริ่มต้นคือ 4 MB</li><li><code>ConcurrentRequests</code> : ตัวเลือก ConcurrentRequests สนับสนุนการดาวน์โหลดข้อมูลที่รวดเร็วยิ่งขึ้น โดยระบุจำนวนคำขอที่จะดำเนินการพร้อมกันโดยใช้งานหน่วยความจำ หน่วยความจำที่จำเป็นคือ (ConcurrentRequest \* RequestSize) ค่าเริ่มต้นคือ 16</li></ul>



## Category
Accessing data
