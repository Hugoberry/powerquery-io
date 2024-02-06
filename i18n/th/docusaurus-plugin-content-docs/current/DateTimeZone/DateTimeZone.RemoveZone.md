---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


เอาข้อมูลโซนเวลาออกจากค่าโซนวันที่เวลาที่กำหนด


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

ส่งกลับค่า #datetime จาก <code>dateTimeZone</code> พร้อมเอาข้อมูลโซนเวลาออก


## Examples

### Example #1 
เอาข้อมูลโซนเวลาจากค่า #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0)
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
