---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


ระบุว่าวันที่นี้เกิดขึ้นระหว่างจำนวนเดือนก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในเดือนปัจจุบัน


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนเดือนก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในเดือนปัจจุบัน

-   `dateTime`: ค่าของ `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน
-   `months`: จำนวนเดือน


## Examples

### Example #1
พิจารณาว่าเดือนหลังจากเวลาระบบปัจจุบันอยู่ในช่วงเวลาสองเดือนก่อนหน้าหรือไม่
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
