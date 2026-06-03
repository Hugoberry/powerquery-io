---
title: Marketo.Activities
---

# Marketo.Activities


ส่งคืนค่าตารางพร้อมกิจกรรมสำหรับลูกค้าที่สนใจ


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

เรียกใช้ Marketo REST API Endpoint ที่ `url`/rest/v1/activities.json กิจกรรมทั้งหมดอยู่ในรายการ `activityIds` ซึ่งเกิดขึ้นนับจากส่งคืนค่า `startTime`


## Examples

### Example #1
ดึงตารางกิจกรรม "เข้าชมหน้าเว็บ" นับจากวันที่ 1 เดือนพฤศจิกายน ปี 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
ตารางพร้อมรายละเอียดกิจกรรม "เข้าชมหน้าเว็บ" ทั้งหมดนับจากวันที่ 1 เดือนพฤศจิกายน ปี 2015
```



