---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


ระบุว่าวันที่นี้เกิดขึ้นระหว่างปีปัจจุบันหรือไม่ และอยู่ในหรือก่อนวันปัจจุบันตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลาที่ระบุ `dateTime` เกิดขึ้นระหว่างปีปัจจุบันหรือไม่ และอยู่ในหรือก่อนวันปัจจุบันตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ

-   `dateTime`: ค่า `date`, `datetime` หรือ `datetimezone` ที่จะประเมิน


## Examples

### Example #1
กำหนดว่าเวลาของระบบปัจจุบันอยู่ในช่วงเริ่มต้นปีถึงปัจจุบันหรือไม่
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
