---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความในแต่ละตำแหน่งที่ระบุ


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความในแต่ละตำแหน่งที่ระบุ


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าที่ตําแหน่งที่ระบุ โดยเริ่มต้นจากจุดเริ่มต้นของข้อมูลป้อนเข้า
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
แยกข้อมูลป้อนเข้าที่ตําแหน่งที่ระบุ โดยเริ่มต้นจากจุดสิ้นสุดของข้อมูลป้อนเข้า
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
