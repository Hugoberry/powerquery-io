---
title: List.Dates
---

# List.Dates


## Description

สร้างรายการของค่าวันที่โดยกำหนดค่าเริ่มต้น จำนวน และค่าระยะเวลาแบบเพิ่มหน่วย


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

ส่งกลับรายการของค่า <code>date</code> ของขนาด <code>count</code> โดยเริ่มต้นที่ <code>start</code> การเพิ่มหน่วยที่กำหนดให้ <code>step</code> เป็นค่า <code>duration</code> ที่ถูกเพิ่มลงในทุกค่า


## Examples

### Example #1 
สร้างรายการที่มี 10 ค่าโดยเริ่มต้นจากวันก่อนขึ้นปีใหม่ (#date(2011, 12, 31)) ซึ่งจะเพิ่มครั้งละ 1 วัน(#duration(1, 0, 0, 0))
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators
