---
title: DateTime.IsInPreviousNSeconds
---

# DateTime.IsInPreviousNSeconds


## Description

ระบุว่าวันที่เวลานี้เกิดขึ้นระหว่างจำนวนวินาทีก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในวินาทีปัจจุบัน


## Syntax

```powerquery
DateTime.IsInPreviousNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

ระบุว่าค่าวันที่เวลา <code>dateTime</code> ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนวินาทีก่อนหน้าตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในวินาทีปัจจุบัน      <ul>      <li><code>dateTime</code>: ค่าของ <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประเมิน</li>      <li><code>seconds</code>: จำนวนวินาที</li>      </ul>


## Examples

### Example #1 
กำหนดว่าวินาทีก่อนเวลาระบบปัจจุบันจะเป็นค่าสองวินาทีก่อนหน้าหรือไม่
```powerquery
DateTime.IsInPreviousNSeconds(DateTime.FixedLocalNow() - #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
