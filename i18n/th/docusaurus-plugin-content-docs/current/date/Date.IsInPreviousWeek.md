---
title: Date.IsInPreviousWeek
---

# Date.IsInPreviousWeek


ระบุว่าวันที่นี้เกิดขึ้นระหว่างสัปดาห์ก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในสัปดาห์ปัจจุบัน


## Syntax

```powerquery
Date.IsInPreviousWeek(
    dateTime as any
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา <code>dateTime</code> ที่กำหนดไว้เกิดขึ้นระหว่างสัปดาห์ก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในสัปดาห์ปัจจุบัน      <ul>      <li><code>dateTime</code>: ค่าของ <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประเมิน</li>      </ul>


## Examples

### Example #1 
กำหนดว่าสัปดาห์ก่อนเวลาของระบบปัจจุบันอยู่ในสัปดาห์ก่อนหน้าหรือไม่
```powerquery
Date.IsInPreviousWeek(Date.AddDays(DateTime.FixedLocalNow(), -7))
```

Result: 
```powerquery
true
```




## Category
Date
