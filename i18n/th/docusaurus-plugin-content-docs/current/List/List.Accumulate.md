---
title: List.Accumulate
---

# List.Accumulate


สะสมค่าสรุปจากข้อมูลในรายการ


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

สะสมค่าสรุปจากข้อมูลในรายการ <code>list</code> โดยใช้ <code>accumulator</code>    สามารถตั้งค่าพารามิเตอร์ Seed <code>seed</code> ที่เลือกได้


## Examples

### Example #1 
สะสมค่าสรุปจากข้อมูลในรายการ \{1, 2, 3, 4, 5} โดยใช้ ((สถานะ, ปัจจุบัน) =&gt; สถานะ + ปัจจุบัน )
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
