---
title: DateTimeZone.ZoneHours
---

# DateTimeZone.ZoneHours


รับชั่วโมงของโซนเวลาของค่า


## Syntax

```powerquery
DateTimeZone.ZoneHours(
    dateTimeZone as datetimezone
) as number
```


## Remarks

ส่งกลับคอมโพเนนต์ชั่วโมงของโซนเวลาของค่า `datetimezone`

-   `dateTimeZone`: แยกค่า `datetimezone` จากคอมโพเนนต์ชั่วโมงของโซนเวลา หาก `dateTimeZone` เป็น `null` ฟังก์ชันจะส่งกลับ `null`


## Examples

### Example #1
รับคอมโพเนนต์ชั่วโมงของโซนเวลาของค่า `datetimezone` ที่ระบุ
```powerquery
DateTimeZone.ZoneHours(#datetimezone(2024, 4, 28, 13, 24, 22, 7, 30))
```

Result: 
```powerquery
7
```




## Category
DateTimeZone
