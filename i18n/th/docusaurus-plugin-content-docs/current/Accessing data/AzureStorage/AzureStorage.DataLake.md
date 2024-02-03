---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

ส่งกลับตารางการนำทางซึ่งมีเอกสารที่พบในคอนเทนเนอร์ที่ระบุและโฟลเดอร์ย่อยจาก Azure Data Lake Storage


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

ส่งกลับตารางการนำทางซึ่งมีเอกสารที่พบในคอนเทนเนอร์ที่ระบุและโฟลเดอร์ย่อยที่ URL บัญชี <code>endpoint</code> จากระบบไฟล์ Azure Data Lake Storage อาจมีการระบุ <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้:    <ul><li><code>BlockSize</code> : จำนวนไบต์ที่อ่านก่อนรอผู้ใช้ข้อมูล ค่าเริ่มต้นคือ 4 MB</li><li><code>RequestSize</code> : จำนวนไบต์ที่พยายามอ่านในการร้องขอทาง HTTP แบบเดี่ยวไปยังเซิร์ฟเวอร์ ค่าเริ่มต้นคือ 4 MB</li><li><code>ConcurrentRequests</code> : ตัวเลือก ConcurrentRequests สนับสนุนการดาวน์โหลดข้อมูลที่รวดเร็วยิ่งขึ้น โดยระบุจำนวนคำขอที่จะดำเนินการพร้อมกันโดยใช้งานหน่วยความจำ หน่วยความจำที่จำเป็นคือ (ConcurrentRequest \* RequestSize) ค่าเริ่มต้นคือ 16</li><li><code>HierarchicalNavigation</code> : ลอจิคัล (จริง/เท็จ) ที่ควบคุมว่าจะส่งกลับไฟล์ในมุมมองไดเรกทอรีทรีหรือในรายการธรรมดา ค่าเริ่มต้นคือ เท็จ</li></ul>



## Category
Accessing data
