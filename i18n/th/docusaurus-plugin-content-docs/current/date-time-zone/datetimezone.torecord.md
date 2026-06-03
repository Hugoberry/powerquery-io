---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


ส่งกลับระเบียนที่มีส่วนของค่าโซนวันที่เวลา


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

ส่งกลับระเบียนที่มีส่วนของค่าโซนวันที่เวลาที่ระบุ `dateTimeZone`

-   `dateTimeZone`: ค่า`โซนวันที่เวลา`สำหรับเริ่มคำนวณระเบียนของส่วนประกอบดังกล่าว


## Examples

### Example #1
แปลงค่า `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` เป็นระเบียนที่มีค่าวันที่ เวลา และเขต
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
