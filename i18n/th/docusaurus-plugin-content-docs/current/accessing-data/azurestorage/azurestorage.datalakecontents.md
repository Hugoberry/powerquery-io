---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


ส่งกลับเนื้อหาของไฟล์ที่ระบุจากระบบไฟล์ Azure Data Lake Storage


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

ส่งกลับเนื้อหาของไฟล์ที่ URL `url` จากระบบไฟล์ Azure Data Lake Storage อาจมีการระบุ `options` เพื่อควบคุมตัวเลือกต่อไปนี้:

-   `BlockSize` : จำนวนไบต์ที่อ่านก่อนรอผู้ใช้ข้อมูล ค่าเริ่มต้นคือ 4 MB
-   `RequestSize` : จำนวนไบต์ที่พยายามอ่านในการร้องขอทาง HTTP แบบเดี่ยวไปยังเซิร์ฟเวอร์ ค่าเริ่มต้นคือ 4 MB
-   `ConcurrentRequests` : ตัวเลือก ConcurrentRequests สนับสนุนการดาวน์โหลดข้อมูลที่รวดเร็วยิ่งขึ้น โดยระบุจำนวนคำขอที่จะดำเนินการพร้อมกันโดยใช้งานหน่วยความจำ หน่วยความจำที่จำเป็นคือ (ConcurrentRequest \* RequestSize) ค่าเริ่มต้นคือ 16



## Category
Accessing data
