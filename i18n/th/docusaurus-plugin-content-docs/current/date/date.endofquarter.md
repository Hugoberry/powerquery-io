---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


ส่งกลับจุดสิ้นสุดของไตรมาส


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

ส่งกลับจุดสิ้นสุดของไตรมาสที่มี `dateTime` ข้อมูลโซนเวลาจะถูกเก็บไว้

-   `dateTime`: ค่า`วันที่` `วันที่เวลา` หรือ`โซนวันที่เวลา`ที่คํานวณว่ามีจุดสิ้นสุดของไตรมาสใดบ้าง


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
