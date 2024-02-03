---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


## Description

ระบุว่าวันที่เวลานี้เกิดขึ้นระหว่างชั่วโมงก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในชั่วโมงปัจจุบัน


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Details

ระบุว่าค่าวันที่เวลา <code>dateTime</code> ที่กำหนดไว้เกิดขึ้นระหว่างชั่วโมงก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในชั่วโมงปัจจุบัน      <ul>      <li><code>dateTime</code>: ค่าของ <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประเมิน</li>      </ul>


## Examples

### Example #1 
กำหนดว่าชั่วโมงก่อนเวลาระบบปัจจุบันจะเป็นค่าชั่วโมงก่อนหน้าหรือไม่
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
