---
title: List.Times
---

# List.Times


## Description

สร้างรายการของค่าเวลาโดยกำหนดค่าเริ่มต้น จำนวน และค่าระยะเวลาแบบเพิ่มหน่วย


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

ส่งกลับรายการของค่า <code>time</code> ของขนาด <code>count</code> โดยเริ่มต้นที่ <code>start</code> การเพิ่มหน่วยที่กำหนดให้ <code>step</code> เป็นค่า <code>duration</code> ที่ถูกเพิ่มลงในทุกค่า


## Examples

### Example #1 
สร้างรายการที่ประกอบด้วย 4 ค่าเริ่มจากเที่ยงวัน (#time(12, 0, 0)) โดยเพิ่มหน่วยทีละหนึ่งชั่วโมง (#duration(0, 1, 0, 0))
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators
