---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


ระบุว่าวันที่นี้เกิดขึ้นระหว่างจำนวนสัปดาห์ถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในสัปดาห์ปัจจุบัน


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนสัปดาห์ถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในสัปดาห์ปัจจุบัน

-   `dateTime`: ค่าของ `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน
-   `weeks`: จำนวนสัปดาห์


## Examples

### Example #1
พิจารณาว่าสัปดาห์หลังจากเวลาระบบปัจจุบันอยู่ในช่วงเวลาสองไตรมาสถัดไปหรือไม่
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
