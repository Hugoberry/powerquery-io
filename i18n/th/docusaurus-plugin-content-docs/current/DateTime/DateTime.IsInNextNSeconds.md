---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


## Description

ระบุว่าวันที่เวลานี้เกิดขึ้นระหว่างจำนวนวินาทีถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในวินาทีปัจจุบัน


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Details

ระบุว่าค่าวันที่เวลา <code>dateTime</code> ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนวินาทีถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในวินาทีปัจจุบัน      <ul>      <li><code>dateTime</code>: ค่าของ <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประเมิน</li>      <li><code>seconds</code>: จำนวนวินาที</li>      </ul>


## Examples

### Example #1 
กำหนดว่าวินาทีหลังจากเวลาระบบปัจจุบันจะเป็นค่าสองวินาทีถัดไปหรือไม่
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
