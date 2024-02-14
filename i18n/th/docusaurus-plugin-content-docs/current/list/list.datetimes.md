---
title: List.DateTimes
---

# List.DateTimes


สร้างรายการของค่าเวลาของวันที่โดยกำหนดค่าเริ่มต้น จำนวน และค่าระยะเวลาแบบเพิ่มหน่วย


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Remarks

ส่งกลับรายการของค่า <code>datetime</code> ของขนาด <code>count</code> โดยเริ่มต้นที่ <code>start</code> การเพิ่มหน่วยที่กำหนดให้ <code>step</code> เป็นค่า <code>duration</code> ที่ถูกเพิ่มลงในทุกค่า


## Examples

### Example #1 
สร้างรายการที่มี 10 ค่าโดยเริ่มต้นจาก 5 นาทีก่อนวันขึ้นปีใหม่ (#datetime(2011, 12, 31, 23, 55, 0)) ซึ่งจะเพิ่มครั้งละ 1 นาที (#duration(0, 0, 1, 0))
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators
