---
title: DateTime.ToRecord
---

# DateTime.ToRecord


ส่งกลับระเบียนที่มีส่วนของค่าวันที่เวลา


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

ส่งกลับระเบียนที่มีส่วนของค่าวันที่เวลาที่ระบุ <code>dateTime</code> <ul>        <li><code>dateTime</code>: ค่า <code>วันที่เวลา</code> สำหรับเริ่มคำนวณระเบียนของส่วนประกอบดังกล่าว</li>      </ul>


## Examples

### Example #1 
แปลงค่า &lt;code&gt;#datetime(2011, 12, 31, 11, 56, 2)&lt;/code&gt; เป็นระเบียนที่มีค่าวันที่และเวลา
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
