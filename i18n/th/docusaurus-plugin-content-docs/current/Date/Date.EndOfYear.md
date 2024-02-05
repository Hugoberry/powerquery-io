---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

ส่งกลับจุดสิ้นสุดของปี


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

ส่งกลับจุดสิ้นสุดของปีที่มี <code>dateTime</code> รวมถึงเศษส่วนวินาที ข้อมูลโซนเวลาจะถูกเก็บไว้      <ul>      <li><code>dateTime</code>: ค่า<code>วันที่</code> <code>วันที่เวลา</code> หรือ<code>โซนวันที่เวลา</code>ที่คํานวณว่ามีจุดสิ้นสุดของปีใดบ้าง</li>      </ul>


## Examples

### Example #1 
รับสิ้นสุดปีสำหรับ 5/14/2011 05:00:00 PM
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
รับสิ้นสุดชั่วโมงสำหรับ 5/17/2011 05:00:00 PM -7:00
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
