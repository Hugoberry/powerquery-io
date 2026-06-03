---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


ส่งกลับตารางการนำทางซึ่งมีเอกสารที่พบในคอนเทนเนอร์ที่ระบุและโฟลเดอร์ย่อยจาก Azure Data Lake Storage


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางการนำทางซึ่งมีเอกสารที่พบในคอนเทนเนอร์ที่ระบุและโฟลเดอร์ย่อยที่ URL บัญชี `endpoint` จากระบบไฟล์ Azure Data Lake Storage อาจมีการระบุ `options` เพื่อควบคุมตัวเลือกต่อไปนี้:

-   `BlockSize` : จำนวนไบต์ที่อ่านก่อนรอผู้ใช้ข้อมูล ค่าเริ่มต้นคือ 4 MB
-   `RequestSize` : จำนวนไบต์ที่พยายามอ่านในการร้องขอทาง HTTP แบบเดี่ยวไปยังเซิร์ฟเวอร์ ค่าเริ่มต้นคือ 4 MB
-   `ConcurrentRequests` : ตัวเลือก ConcurrentRequests สนับสนุนการดาวน์โหลดข้อมูลที่รวดเร็วยิ่งขึ้น โดยระบุจำนวนคำขอที่จะดำเนินการพร้อมกันโดยใช้งานหน่วยความจำ หน่วยความจำที่จำเป็นคือ (ConcurrentRequest \* RequestSize) ค่าเริ่มต้นคือ 16
-   `HierarchicalNavigation` : ลอจิคัล (จริง/เท็จ) ที่ควบคุมว่าจะส่งกลับไฟล์ในมุมมองไดเรกทอรีทรีหรือในรายการธรรมดา ค่าเริ่มต้นคือ เท็จ



## Category
Accessing data
