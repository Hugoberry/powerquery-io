---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

นำกลับตารางพร้อมด้วยเนื้อหารายงานจาก Webtrends


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

เรียกหาจุดแสดงผลการรายงาน Webtrends ที่ให้ไว้ และนำกลับข้อมูลทั้งหมดเป็นตาราง


## Examples

### Example #1 
เรียกหาจุดแสดงผลรายงานของผู้เยี่ยมชม Webtrends สำหรับข้อมูลใน 30 วันล่าสุด
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
ตารางของข้อมูลผู้เยี่ยมชม
```



