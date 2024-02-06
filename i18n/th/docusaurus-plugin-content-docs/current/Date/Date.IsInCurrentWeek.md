---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


ระบุว่าวันที่นี้เกิดขึ้นระหว่างสัปดาห์ปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลาที่ระบุ <code>dateTime</code> เกิดขึ้นระหว่างสัปดาห์ปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ      <ul>      <li><code>dateTime</code>: ค่า <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่จะประเมิน</li>      </ul>


## Examples

### Example #1 
กำหนดว่าเวลาของระบบปัจจุบันอยู่ในสัปดาห์ปัจจุบันหรือไม่
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
