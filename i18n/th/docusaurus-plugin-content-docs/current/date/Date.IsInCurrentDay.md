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

ระบุว่าค่าวันที่เวลาที่ระบุ <code>dateTime</code> เกิดขึ้นระหว่างวันปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ      <ul>      <li><code>dateTime</code>: ค่า <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่จะประเมิน</li>      </ul>


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
