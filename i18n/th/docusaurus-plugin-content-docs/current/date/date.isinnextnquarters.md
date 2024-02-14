---
title: Date.IsInNextNQuarters
---

# Date.IsInNextNQuarters


ระบุว่าวันที่นี้เกิดขึ้นระหว่างจำนวนไตรมาสถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันในระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในไตรมาสปัจจุบัน


## Syntax

```powerquery
Date.IsInNextNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Remarks

ระบุว่าค่าวันที่เวลา <code>dateTime</code> ที่กำหนดไว้เกิดขึ้นระหว่างจำนวนไตรมาสถัดไปตามที่กำหนดโดยวันที่และเวลาปัจจุบันของระบบหรือไม่ โปรดทราบว่าฟังก์ชันนี้จะส่งกลับค่า false เมื่อส่งผ่านค่าที่เกิดขึ้นภายในไตรมาสปัจจุบัน      <ul>      <li><code>dateTime</code>: ค่าของ <code>วันที่</code>, <code>วันที่เวลา</code> หรือ <code>โซนวันที่เวลา</code> ที่จะประมวลผล</li>      <li><code>quarters</code>: จำนวนไตรมาส</li>      </ul>


## Examples

### Example #1 
พิจารณาว่าไตรมาสหลังจากเวลาระบบปัจจุบันอยู่ในช่วงเวลาสองไตรมาสถัดไปหรือไม่
```powerquery
Date.IsInNextNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
