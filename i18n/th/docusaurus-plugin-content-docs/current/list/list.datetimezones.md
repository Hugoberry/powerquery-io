---
title: List.DateTimeZones
---

# List.DateTimeZones


สร้างรายการของค่าโซนเวลาของวันที่โดยกำหนดค่าเริ่มต้น จำนวน และค่าระยะเวลาแบบเพิ่มหน่วย


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Remarks

ส่งกลับรายการของค่า <code>datetimezone</code> ของขนาด <code>count</code> โดยเริ่มต้นที่ <code>start</code> การเพิ่มหน่วยที่กำหนดให้ <code>step</code> เป็นค่า <code>duration</code> ที่ถูกเพิ่มลงในทุกค่า


## Examples

### Example #1 
สร้างรายการที่มี 10 ค่าโดยเริ่มต้นจาก 5 นาทีก่อนวันขึ้นปีใหม่ (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) ซึ่งจะเพิ่มครั้งละ 1 นาที (#duration(0, 0, 1, 0))
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators
