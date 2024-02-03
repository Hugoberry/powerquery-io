---
title: SparkPost.GetList
---

# SparkPost.GetList



## Syntax

```powerquery
SparkPost.GetList(
    path as text
) as table
```


## Details

สามารถใช้ฟังก์ชันนี้เพื่อเรียกใช้จุดสิ้นสุด "รายการ" ที่เสนอโดย SparkPost API v1 เมื่อเรียกใช้ SparkPost API โดยใช้ฟังก์ชันนี้ โปรดจำไว้ว่า SparkPost API มีขีดจำกัดอัตรา API ที่แน่นอน ถ้าคุณเห็นรหัสสถานะ 429 ถูกส่งกลับจากเซิร์ฟเวอร์ SparkPost แสดงว่าคุณถึงขีดจำกัดอัตราและจะต้องรอสักครู่ก่อนเรียกใช้เพิ่มเติม


## Examples

### Example #1 
ส่งกลับตารางที่มีคอลัมน์เดียวที่มีข้อมูลจากหนึ่งในจุดสิ้นสุด &#34;รายการ&#34; SparkPost API v1 (โปรดดูคู่มือ SparkPost สำหรับรายละเอียด)
```powerquery
Source = SparkPost.GetList("metrics/campaigns")
```

Result: 
```powerquery
Json.Document
```



