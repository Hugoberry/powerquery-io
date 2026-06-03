---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


ระบุว่าวันที่นี้เกิดขึ้นระหว่างจำนวนไตรมาสก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในไตรมาสปัจจุบัน


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา `dateTime` ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนไตรมาสก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในไตรมาสปัจจุบัน

-   `dateTime`: ค่าของ `วันที่`, `วันที่เวลา` หรือ `โซนวันที่เวลา` ที่จะประเมิน
-   `quarters`: จำนวนไตรมาส


## Examples

### Example #1
พิจารณาว่าไตรมาสหลังจากเวลาระบบปัจจุบันอยู่ในช่วงเวลาสองไตรมาสก่อนหน้าหรือไม่
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
