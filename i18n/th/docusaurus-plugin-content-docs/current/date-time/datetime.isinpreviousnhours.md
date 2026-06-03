---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


ระบุว่าวันที่เวลานี้เกิดขึ้นระหว่างจำนวนชั่วโมงก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในชั่วโมงปัจจุบัน


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนชั่วโมงก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในชั่วโมงปัจจุบัน

-   `dateTime`: ค่าของ `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน
-   `hours`: จำนวนชั่วโมง


## Examples

### Example #1
กำหนดว่าชั่วโมงก่อนเวลาระบบปัจจุบันจะเป็นค่าสองชั่วโมงก่อนหน้าหรือไม่
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
