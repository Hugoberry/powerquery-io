---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

ระบุว่าวันที่นี้เกิดขึ้นระหว่างเดือนปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

ระบุว่าค่าวันที่เวลาที่ระบุ <code>dateTime</code> เกิดขึ้นระหว่างเดือนปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ      <ul>      <li><code>dateTime</code>: ค่า <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่จะประเมิน</li>      </ul>


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
