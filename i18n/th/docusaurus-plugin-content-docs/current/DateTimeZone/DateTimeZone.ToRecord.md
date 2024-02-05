---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


## Description

ส่งกลับระเบียนที่มีส่วนของค่าโซนวันที่เวลา


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Details

ส่งกลับระเบียนที่มีส่วนของค่าโซนวันที่เวลาที่ระบุ <code>dateTimeZone</code> <ul>        <li><code>dateTimeZone</code>: ค่า<code>โซนวันที่เวลา</code>สำหรับเริ่มคำนวณระเบียนของส่วนประกอบดังกล่าว</li>      </ul>


## Examples

### Example #1 
แปลงค่า &lt;code&gt;#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)&lt;/code&gt; เป็นระเบียนที่มีค่าวันที่ เวลา และเขต
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
