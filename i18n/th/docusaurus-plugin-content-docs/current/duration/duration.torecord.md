---
title: Duration.ToRecord
---

# Duration.ToRecord


ส่งกลับระเบียนที่มีส่วนของระยะเวลา


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

ส่งกลับระเบียนที่มีส่วนของค่าระยะเวลา `duration`

-   `duration`: `ระยะเวลา` ที่ระเบียนถูกสร้าง


## Examples

### Example #1
แปลง `#duration(2, 5, 55, 20)` เป็นระเบียนของส่วนต่างๆ รวมถึงวัน ชั่วโมง นาที และวินาทีหากมีให้ใช้งาน
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
