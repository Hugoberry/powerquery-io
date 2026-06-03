---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


ระบุว่าวันที่นี้เกิดขึ้นระหว่างปีปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลาที่ระบุ `dateTime` เกิดขึ้นระหว่างปีปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ

-   `dateTime`: ค่า `date`, `datetime` หรือ `datetimezone` ที่จะประเมิน


## Examples

### Example #1
กำหนดว่าเวลาของระบบปัจจุบันอยู่ในปีปัจจุบันหรือไม่
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
