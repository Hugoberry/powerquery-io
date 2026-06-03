---
title: Time.Hour
---

# Time.Hour


ส่งกลับส่วนประกอบของชั่วโมง


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

ส่งกลับส่วนประกอบชั่วโมงของค่า `time`, `datetime` หรือ `datetimezone` ที่กำหนดให้ ได้แก่ `dateTime`


## Examples

### Example #1
หาชั่วโมงใน #datetime(2011, 12, 31, 9, 15, 36)
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
