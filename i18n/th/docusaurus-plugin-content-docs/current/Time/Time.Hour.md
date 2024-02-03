---
title: Time.Hour
---

# Time.Hour


## Description

ส่งกลับส่วนประกอบของชั่วโมง


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Details

ส่งกลับส่วนประกอบชั่วโมงของค่า <code>time</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่กำหนดให้ ได้แก่ <code>dateTime</code>


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
