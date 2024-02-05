---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


## Description

แปลงคอมโพเนนต์โซนเวลาเป็นโซนเวลา UTC


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Details

เปลี่ยนแปลงข้อมูลโซนเวลาของค่าวันที่เวลา <code>dateTimeZone</code> เป็นข้อมูลโซนเวลา UTC หรือเวลาสากล    ถ้า <code>dateTimeZone</code> ไม่มีคอมโพเนนต์โซนเวลา ข้อมูลโซนเวลา UTC จะถูกเพิ่ม


## Examples

### Example #1 
เปลี่ยนแปลงข้อมูลโซนเวลาสำหรับ #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) เป็นโซนเวลา UTC
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
