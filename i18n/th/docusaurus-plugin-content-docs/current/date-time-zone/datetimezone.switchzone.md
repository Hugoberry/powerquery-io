---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


เปลี่ยนโซนเวลาของค่า


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

เปลี่ยนแปลงข้อมูลโซนเวลาในค่าโซนวันที่เวลา `dateTimeZone` ในข้อมูลโซนเวลาใหม่จาก `timezoneHours` หรือ `timezoneMinutes` ก็ได้ ถ้า `dateTimeZone` ไม่มีคอมโพเนนต์โซนเวลา ระบบจะแสดงข้อผิดพลาด


## Examples

### Example #1
เปลี่ยนแปลงข้อมูลโซนเวลาสำหรับ #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) เป็น 8 ชั่วโมง
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
เปลี่ยนแปลงข้อมูลโซนเวลาสำหรับ #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) เป็น -30 นาที
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
