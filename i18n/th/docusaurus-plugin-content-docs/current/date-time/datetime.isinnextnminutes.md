---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


ระบุว่าวันที่เวลานี้เกิดขึ้นระหว่างจำนวนนาทีถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในนาทีปัจจุบัน


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนนาทีถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในนาทีปัจจุบัน

-   `dateTime`: ค่าของ `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน
-   `minutes`: จำนวนนาที


## Examples

### Example #1
กำหนดว่านาทีหลังจากเวลาระบบปัจจุบันจะเป็นค่าสองนาทีถัดไปหรือไม่
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
