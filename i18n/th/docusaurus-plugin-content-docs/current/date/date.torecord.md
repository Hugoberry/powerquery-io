---
title: Date.ToRecord
---

# Date.ToRecord


ส่งกลับระเบียนที่มีส่วนของค่าวันที่


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

ส่งกลับระเบียนที่มีส่วนของค่าวันที่ที่ระบุ `date`

-   `date`: ค่า `วันที่` สำหรับเริ่มคำนวณระเบียนของส่วนประกอบดังกล่าว


## Examples

### Example #1
แปลงค่า `#date(2011, 12, 31)` เป็นระเบียนที่มีส่วนต่างๆ จากค่าวันที่
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
