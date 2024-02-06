---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


นำกลับตารางพร้อมด้วยคีย์เมตริก Webtrends


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

เรียกหาจุดแสดงผล Webtrends KeyMetrics และนำกลับข้อมูลทั้้งหมดเป็นตาราง


## Examples

### Example #1 
ดึงตารางของเมตริกหลักสำหรับเทแนนท์ 98765 ใน 30 วันล่าสุด
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
ตารางของเมตริกหลัก
```



