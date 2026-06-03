---
title: Date.IsInPreviousDay
---

# Date.IsInPreviousDay


ระบุว่าวันที่นี้เกิดขึ้นระหว่างวันก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในวันปัจจุบัน


## Syntax

```powerquery
Date.IsInPreviousDay(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างวันก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในวันปัจจุบัน

-   `dateTime`: ค่าของ `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน


## Examples

### Example #1
กำหนดว่าวันก่อนเวลาของระบบปัจจุบันอยู่ในวันก่อนหน้าหรือไม่
```powerquery
Date.IsInPreviousDay(Date.AddDays(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
