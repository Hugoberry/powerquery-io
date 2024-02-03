---
title: SparkPost.GetTable
---

# SparkPost.GetTable


## Description

นำกลับตารางเมตริกจาก SparkPost API v1


## Syntax

```powerquery
SparkPost.GetTable(
    DaysToAggregate as number,
    MetricColumns as text,
    NonMetricColumns as text,
    Path as text
) as table
```


## Details

ฟังก์ชันนี้สามารถใช้เพื่อดึงข้อมูลจากจุดสิ้นสุด "เมตริก" เฉพาะของ SparkPost API v1 เมื่อรีเฟรชตารางเหล่านี้หรือเรียกใช้ SparkPost API โดยใช้ตัวเชื่อมนี้ โปรดจำไว้ว่า SparkPost API มีขีดจำกัดอัตรา API ที่แน่นอน ถ้าคุณเห็นรหัสสถานะ 429 ถูกส่งกลับจากเซิร์ฟเวอร์ SparkPost แสดงว่าคุณมาถึงขีดจำกัดอัตราและจะต้องรอสักครู่ก่อนเรียกใช้เพิ่มเติม เมื่อเลือกค่าสำหรับพารามิเตอร์จำนวนวัน โปรดทราบว่า API จะเก็บข้อมูลไว้ 6 เดือนเท่านั้น


## Examples

### Example #1 
ดึงเมตริกความสามารถในการส่ง count_sent และ count_rejected สำหรับ campaign_ids ที่ได้รวมมาทั้งหมดในสามวันที่ผ่านมา 
```powerquery
Source = SparkPost.GetTable(3, "count_sent,count_rejected", "campaign_id", "metrics/deliverability/campaign")
```

Result: 
```powerquery
ตาราง
```



