---
title: List.Durations
---

# List.Durations


## Description

สร้างรายการของค่าระยะทางโดยกำหนดค่าเริ่มต้น จำนวน และค่าระยะเวลาแบบเพิ่มหน่วย


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

ส่งกลับรายการค่า <code>count</code> <code>duration</code> โดยเริ่มต้นที่ <code>start</code> และเพิ่มตาม <code>duration</code> ที่กำหนด <code>step</code>


## Examples

### Example #1 
สร้างรายการที่ประกอบด้วย 5 ค่าเริ่ม 1 ชั่วโมงและเพิ่มทีละหนึ่งชั่วโมง
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
