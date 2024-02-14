---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


ระบุว่าวันที่นี้เกิดขึ้นระหว่างจำนวนสัปดาห์ก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในสัปดาห์ปัจจุบัน


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา <code>dateTime</code> ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนสัปดาห์ก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในสัปดาห์ปัจจุบัน      <ul>      <li><code>dateTime</code>: ค่าของ <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประเมิน</li>      <li><code>weeks</code>: จำนวนสัปดาห์</li>      </ul>


## Examples

### Example #1 
พิจารณาว่าสัปดาห์หลังจากเวลาระบบปัจจุบันอยู่ในช่วงเวลาสองสัปดาห์ก่อนหน้าหรือไม่
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
