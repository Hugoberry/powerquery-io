---
title: DateTime.AddZone
---

# DateTime.AddZone


เพิ่มข้อมูลโซนเวลาลงในค่าวันที่เวลา


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

เพิ่มข้อมูลโซนเวลาไปยังค่า <code>dateTime</code> ข้อมูลโซนเวลาประกอบด้วย <code>timezoneHours</code> และ <code>timezoneMinutes</code> เพิ่มเติม ซึ่งระบุออฟเซตที่ต้องการจากเวลา UTC


## Examples

### Example #1 
ตั้งค่าโซนเวลาเป็น UTC+7:30 (7 ชั่วโมงและ 30 นาทีหลังเวลา UTC)
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
