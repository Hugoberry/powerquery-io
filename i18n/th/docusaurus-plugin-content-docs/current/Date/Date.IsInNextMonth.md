---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


## Description

ระบุว่าวันที่นี้เกิดขึ้นระหว่างเดือนถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในเดือนปัจจุบัน


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Details

ระบุว่าค่าวันที่เวลา <code>dateTime</code> ที่กำหนดไว้เกิดขึ้นระหว่างเดือนถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในเดือนปัจจุบัน      <ul>      <li><code>dateTime</code>: ค่าของ <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประเมิน</li>      </ul>


## Examples

### Example #1 
กำหนดว่าเดือนหลังจากเวลาของระบบปัจจุบันอยู่ในเดือนถัดไปหรือไม่
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
