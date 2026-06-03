---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


ระบุว่าวันที่เวลานี้เกิดขึ้นระหว่างจำนวนวินาทีถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในวินาทีปัจจุบัน


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนวินาทีถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในวินาทีปัจจุบัน

-   `dateTime`: ค่าของ `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน
-   `seconds`: จำนวนวินาที


## Examples

### Example #1
กำหนดว่าวินาทีหลังจากเวลาระบบปัจจุบันจะเป็นค่าสองวินาทีถัดไปหรือไม่
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
