---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


## Description

ส่งกลับจุดสิ้นสุดของไตรมาส


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Details

ส่งกลับจุดสิ้นสุดของไตรมาสที่มี <code>dateTime</code> ข้อมูลโซนเวลาจะถูกเก็บไว้      <ul>      <li><code>dateTime</code>: ค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>ที่คํานวณว่ามีจุดสิ้นสุดของไตรมาสใดบ้าง</li>      </ul>


## Examples

### Example #1 
ค้นหาจุดสิ้นสุดของไตรมาสสําหรับวันที่ 10 ตุลาคม 2011 เวลา 8:00 น.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
