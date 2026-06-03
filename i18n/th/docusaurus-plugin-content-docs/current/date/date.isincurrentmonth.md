---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


ระบุว่าวันที่นี้เกิดขึ้นระหว่างเดือนปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลาที่ระบุ `dateTime` เกิดขึ้นระหว่างเดือนปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ

-   `dateTime`: ค่า `date`, `datetime` หรือ `datetimezone` ที่จะประเมิน


## Examples

### Example #1
กำหนดว่าเวลาของระบบปัจจุบันอยู่ในเดือนปัจจุบันหรือไม่
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
