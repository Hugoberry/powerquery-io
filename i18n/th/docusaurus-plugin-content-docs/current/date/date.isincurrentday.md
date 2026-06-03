---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


ระบุว่าวันที่นี้เกิดขึ้นระหว่างวันปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลาที่ระบุ `dateTime` เกิดขึ้นระหว่างวันปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ

-   `dateTime`: ค่า `date`, `datetime` หรือ `datetimezone` ที่จะประเมิน


## Examples

### Example #1
กำหนดว่าเวลาของระบบปัจจุบันอยู่ในวันปัจจุบันหรือไม่
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
