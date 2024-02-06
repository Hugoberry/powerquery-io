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

เรียกใช้ Marketo REST API Endpoint ที่ <code>url</code>/rest/v1/activities.json กิจกรรมทั้งหมดอยู่ในรายการ <code>activityIds</code> ซึ่งเกิดขึ้นนับจากส่งคืนค่า <code>startTime</code>


## Examples

### Example #1 
ดึงตารางกิจกรรม &#34;เข้าชมหน้าเว็บ&#34; นับจากวันที่ 1 เดือนพฤศจิกายน ปี 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
ตารางพร้อมรายละเอียดกิจกรรม "เข้าชมหน้าเว็บ" ทั้งหมดนับจากวันที่ 1 เดือนพฤศจิกายน ปี 2015
```



