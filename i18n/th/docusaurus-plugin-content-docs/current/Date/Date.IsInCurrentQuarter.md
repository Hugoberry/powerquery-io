---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

ระบุว่าวันที่นี้เกิดขึ้นระหว่างไตรมาสปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

ระบุว่าค่าวันที่เวลาที่ระบุ <code>dateTime</code> เกิดขึ้นระหว่างไตรมาสปัจจุบันหรือไม่ ตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบ      <ul>      <li><code>dateTime</code>: ค่า <code>date</code>, <code>datetime</code> หรือ <code>datetimezone</code> ที่จะประเมิน</li>      </ul>


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
