---
title: Time.ToRecord
---

# Time.ToRecord


ส่งกลับระเบียนที่มีส่วนของค่าเวลา


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

ส่งกลับระเบียนที่มีส่วนประกอบของค่าเวลา `time` ที่กำหนด

-   `time`: ค่า`เวลา` สำหรับเริ่มคำนวณระเบียนของส่วนประกอบดังกล่าว


## Examples

### Example #1
แปลงค่า `#time(11, 56, 2)` ให้เป็นระเบียนที่มีค่าเวลา
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
