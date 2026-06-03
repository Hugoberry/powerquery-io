---
title: DateTimeZone.ZoneMinutes
---

# DateTimeZone.ZoneMinutes


รับนาทีของโซนเวลาของค่า


## Syntax

```powerquery
DateTimeZone.ZoneMinutes(
    dateTimeZone as datetimezone
) as number
```


## Remarks

ส่งคืนค่านาทีของเขตเวลาจากค่า \`datetimezone\`

-   `dateTimeZone`: ค่า `datetimezone` ที่ใช้แยกส่วนนาทีของเขตเวลา หาก `dateTimeZone` เป็น `null` ฟังก์ชันจะส่งคืนค่า `null`


## Examples

### Example #1
รับคอมโพเนนต์นาทีของโซนเวลาของค่า “datetimezone” ที่ระบุ
```powerquery
DateTimeZone.ZoneMinutes(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
30
```




## Category
DateTimeZone
