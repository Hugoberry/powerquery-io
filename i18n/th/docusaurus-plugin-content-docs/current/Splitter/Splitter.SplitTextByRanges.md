---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการของข้อความตามออฟเซตและความยาวที่ระบุ


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

ส่งกลับฟังก์ชันที่แยกข้อความออกเป็นรายการข้อความตามออฟเซตและความยาวที่ระบุ ความยาว null บ่งชี้ว่าควรรวมข้อมูลป้อนเข้าที่เหลือทั้งหมด


## Examples

### Example #1 
แยกข้อมูลป้อนเข้าตามคู่ตําแหน่งและความยาวที่ระบุ เริ่มต้นจากจุดเริ่มต้นของข้อมูลป้อนเข้า โปรดทราบว่าช่วงในตัวอย่างนี้ทับซ้อนกัน
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
แยกข้อมูลป้อนเข้าตามคู่ตําแหน่งและความยาวที่ระบุ โดยเริ่มต้นจากจุดสิ้นสุดของข้อมูลป้อนเข้า
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
แยกข้อมูลป้อนเข้าเป็นรหัสไปรษณีย์ที่มีความยาวคงที่ตามด้วยชื่อเมืองที่มีความยาวตัวแปร
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
