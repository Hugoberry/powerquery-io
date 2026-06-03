---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


ระบุว่าวันที่นี้เกิดขึ้นระหว่างไตรมาสปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลาที่ระบุ `dateTime` เกิดขึ้นระหว่างไตรมาสปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ

-   `dateTime`: ค่า `date`, `datetime` หรือ `datetimezone` ที่จะประเมิน


## Examples

### Example #1
กำหนดว่าเวลาของระบบปัจจุบันอยู่ในไตรมาสปัจจุบันหรือไม่
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
