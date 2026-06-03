---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


ระบุว่าวันที่นี้เกิดขึ้นระหว่างเดือนก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในเดือนปัจจุบัน


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างเดือนก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในนาทีปัจจุบัน

-   `dateTime`: ค่าของ `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน


## Examples

### Example #1
กำหนดว่าเดือนก่อนเวลาของระบบปัจจุบันอยู่ในเดือนก่อนหน้าหรือไม่
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
