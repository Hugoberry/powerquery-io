---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


แปลงคอมโพเนนต์โซนเวลาเป็นโซนเวลาท้องถิ่น


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

เปลี่ยนแปลงข้อมูลโซนเวลาของค่าโซนวันที่เวลา <code>dateTimeZone</code> เป็นข้อมูลโซนเวลาท้องถิ่น    ถ้า <code>dateTimeZone</code> ไม่มีคอมโพเนนต์โซนเวลา ข้อมูลโซนเวลาท้องถิ่นจะถูกเพิ่ม


## Examples

### Example #1 
เปลี่ยนแปลงข้อมูลโซนเวลาสำหรับ #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) เป็นโซนเวลาท้องถิ่น (ใช้ PST)
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
