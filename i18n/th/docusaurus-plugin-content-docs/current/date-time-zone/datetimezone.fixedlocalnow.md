---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


ส่งกลับวันที่และเวลาในโซนเวลาท้องถิ่น ค่านี้จะคงที่และไม่เปลี่ยนแปลงในการเรียกใช้ที่ต่อเนื่องกัน


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Remarks

ส่งกลับค่า <code>datetime</code> เพื่อตั้งค่าวันที่และเวลาปัจจุบันในระบบ ค่าที่ส่งคืนมีข้อมูลเขตข้อมูลที่แสดงเขตข้อมูลในท้องถิ่น ค่านี้จะคงที่และไม่เปลี่ยนแปลงในการเรียกใช้ที่ต่อเนื่องกัน ซึ่งแตกต่างจาก DateTimeZone.LocalNow ที่อาจส่งกลับค่าอื่นในกรณีที่มีการใช้นิพจน์



## Category
DateTimeZone
