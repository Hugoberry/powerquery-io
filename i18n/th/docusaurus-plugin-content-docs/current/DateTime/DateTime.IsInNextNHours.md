---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


## Description

ระบุว่าวันที่เวลานี้เกิดขึ้นระหว่างจำนวนชั่วโมงถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในชั่วโมงปัจจุบัน


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Details

ระบุว่าค่าวันที่เวลา <code>dateTime</code> ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนชั่วโมงถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในชั่วโมงปัจจุบัน      <ul>      <li><code>dateTime</code>: ค่าของ <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประเมิน</li>      <li><code>hours</code>: จำนวนชั่วโมง</li>      </ul>


## Examples

### Example #1 
กำหนดว่าชั่วโมงหลังจากเวลาระบบปัจจุบันจะเป็นค่าสองชั่วโมงถัดไปหรือไม่
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
