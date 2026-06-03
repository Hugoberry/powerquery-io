---
title: DateTime.IsInPreviousNMinutes
---

# DateTime.IsInPreviousNMinutes


ระบุว่าวันที่เวลานี้เกิดขึ้นระหว่างจำนวนนาทีก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในนาทีปัจจุบัน


## Syntax

```powerquery
DateTime.IsInPreviousNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนนาทีก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในนาทีปัจจุบัน

-   `dateTime`: ค่าของ `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน
-   `minutes`: จำนวนนาที


## Examples

### Example #1
กำหนดว่านาทีก่อนเวลาระบบปัจจุบันจะเป็นค่าสองนาทีก่อนหน้าหรือไม่
```powerquery
DateTime.IsInPreviousNMinutes(DateTime.FixedLocalNow() - #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
